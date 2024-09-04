package com.corevision.experience;

import com.corevision.experience.role.Role;
import com.corevision.experience.role.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableJpaAuditing
@EnableAsync
public class ExperienceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExperienceApplication.class, args);
	}

	@Bean
	public CommandLineRunner runner(RoleRepository roleRepository){
		return args -> {
			if(roleRepository.findByName("USER").isEmpty()){
				roleRepository.save(
						Role.builder()
								.name("USER")
								.build()
				);
			}
		};
	}
}
