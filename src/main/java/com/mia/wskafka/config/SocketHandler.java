package com.mia.wskafka.config;

import java.io.IOException;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.google.gson.Gson;
import com.mia.wskafka.kafka.KafkaProducer;
import com.mia.wskafka.kafka.MessageStorage;
import com.mia.wskafka.kafka.Offer;

@Component
public class SocketHandler extends TextWebSocketHandler {
	
	@Autowired
	KafkaProducer producer;
	
	@Autowired
	MessageStorage storage;
	
	Map<String,WebSocketSession> sessions = new ConcurrentHashMap<>();

	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message) throws InterruptedException, IOException {
		System.out.println(message.getPayload());
		Offer staff = new Gson().fromJson(message.getPayload(), Offer.class);
		producer.send(staff);
	}
	
	@Scheduled(fixedDelay=5000)
	public void sendOfferDetails() throws InterruptedException, IOException {
		System.out.println("triggered");
		if(sessions!=null && !sessions.isEmpty()) {
			Set<String> stokens = sessions.keySet();
			Iterator<String> ite=stokens.iterator();
			while(ite.hasNext()) {
				String key = ite.next();
				String retValue = new Gson().toJson(storage.get(key),Offer.class);
				if(retValue!=null) {
					WebSocketSession webSocketSession = sessions.get(key);
					if(webSocketSession.isOpen()) {
						webSocketSession.sendMessage(new TextMessage(retValue));
					}else{
						ite.remove();
					}
				}
			}
		}
	}
	

	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		//the messages will be broadcasted to all users.
		String stoken = (String) session.getAttributes().get("stoken");
		sessions.put(stoken,session);
	}
}
