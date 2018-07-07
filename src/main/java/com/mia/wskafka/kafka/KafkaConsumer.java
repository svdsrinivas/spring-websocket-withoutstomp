package com.mia.wskafka.kafka;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;

public class KafkaConsumer {
	private static final Logger log = LoggerFactory.getLogger(KafkaConsumer.class);

	@Autowired
	MessageStorage storage;
	
	@KafkaListener(topics="topic")
    public void processMessage(Offer content) {
		log.info("received content = '{}'", content);
		storage.put(content);
    }
}
