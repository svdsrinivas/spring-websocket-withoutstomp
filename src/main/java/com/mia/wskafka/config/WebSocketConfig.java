package com.mia.wskafka.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import org.springframework.web.socket.server.standard.ServletServerContainerFactoryBean;

@Configuration
@ComponentScan("com.mia.wskafka")
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		registry.addHandler(socketHandler(), "/portfolio/*")
		.setAllowedOrigins("*")
		.addInterceptors(getWebsocketInterceptor())
		.withSockJS();
	}
	
	@Bean
	public ServletServerContainerFactoryBean createWebSocketContainer() {
		ServletServerContainerFactoryBean container = new ServletServerContainerFactoryBean();
		container.setMaxTextMessageBufferSize(2000);
		container.setMaxSessionIdleTimeout(30000l);
		return container;
	}

	@Bean
	public SocketHandler socketHandler() {
		return new SocketHandler();
	}
	
	@Bean
	public WebSocketInteceptor getWebsocketInterceptor() {
		return new WebSocketInteceptor();
	}

}
