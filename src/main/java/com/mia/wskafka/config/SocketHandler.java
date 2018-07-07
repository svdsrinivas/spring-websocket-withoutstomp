package com.mia.wskafka.config;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Autowired;
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
		String stoken = (String) session.getAttributes().get("stoken");
		WebSocketSession webSocketSession = sessions.get(stoken);
		System.out.println(message.getPayload());
		Offer staff = new Gson().fromJson(message.getPayload(), Offer.class);
		producer.send(staff);
		String retValue = new Gson().toJson(storage.get(stoken),Offer.class);
		webSocketSession.sendMessage(new TextMessage(retValue));
	}

	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		//the messages will be broadcasted to all users.
		String stoken = (String) session.getAttributes().get("stoken");
		sessions.put(stoken,session);
	}
}
