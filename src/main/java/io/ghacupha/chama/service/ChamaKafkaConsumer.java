package io.ghacupha.chama.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class ChamaKafkaConsumer {

    private final Logger log = LoggerFactory.getLogger(ChamaKafkaConsumer.class);
    private static final String TOPIC = "topic_chama";

    @KafkaListener(topics = "topic_chama", groupId = "group_id")
    public void consume(String message) throws IOException {
        log.info("Consumed message in {} : {}", TOPIC, message);
    }
}
