package io.ghacupha.chama.web.rest;

import io.ghacupha.chama.service.ChamaKafkaProducer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/chama-kafka")
public class ChamaKafkaResource {

    private final Logger log = LoggerFactory.getLogger(ChamaKafkaResource.class);

    private ChamaKafkaProducer kafkaProducer;

    public ChamaKafkaResource(ChamaKafkaProducer kafkaProducer) {
        this.kafkaProducer = kafkaProducer;
    }

    @PostMapping(value = "/publish")
    public void sendMessageToKafkaTopic(@RequestParam("message") String message) {
        log.debug("REST request to send to Kafka topic the message : {}", message);
        this.kafkaProducer.sendMessage(message);
    }
}
