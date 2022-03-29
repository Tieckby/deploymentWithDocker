package com.soutenance.apigescab.security;

import com.soutenance.apigescab.security.filter.CustomAuthenticationFilter;
import com.soutenance.apigescab.security.filter.CustomAuthorizationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration @EnableWebSecurity @RequiredArgsConstructor
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter
{
    private final UserDetailsService userDetailsService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors();
        http.csrf().disable();  //Prevent for CSRF Attack
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);    //stateless – No session will be created or used by Spring Security
        http.authorizeRequests().antMatchers("/login/**", "/gescab_db/api/v1/personne/token/refresh/**").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.POST,"/gescab_db/api/v1/personne/add", "/gescab_db/api/v1/personne/getMedecinByCabinetMedicale", "/gescab_db/api/v1/cabinetMedicale/getSpecialities", "/gescab_db/api/v1/cabinetMedicale/getByRive").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/gescab_db/api/v1/personne/getProfileImg/**", "/gescab_db/api/v1/personne/sendEmail/**", "/gescab_db/api/v1/personne/getEmail/**", "/gescab_db/api/v1/personne/getUsername/**", "/gescab_db/api/v1/personne/getTelephone/**").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/gescab_db/api/v1/personne/uploadImg/**").hasAnyAuthority("Role_MEDECIN", "Role_PATIENT", "Role_SUPERADMIN", "Role_ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/gescab_db/api/v1/personne/changePassword/**", "/gescab_db/api/v1/specialite/getAll", "/gescab_db/api/v1/cabinetMedicale/**", "/gescab_db/api/v1/rive/getAll").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/gescab_db/api/v1/personne/setStatut/**").hasAnyAuthority("Role_SUPERADMIN", "Role_ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.DELETE,"/gescab_db/api/v1/personne/**").hasAnyAuthority("Role_SUPERADMIN", "Role_ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.PUT, "/gescab_db/api/v1/personne/update/**").hasAnyAuthority("Role_MEDECIN", "Role_PATIENT", "Role_SUPERADMIN", "Role_ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/gescab_db/api/v1/personne/**").hasAnyAuthority("Role_MEDECIN", "Role_PATIENT", "Role_SUPERADMIN", "Role_ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/gescab_db/api/v1/rive/add").hasAnyAuthority("Role_SUPERADMIN", "Role_ADMIN");

        //RDV authorization
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/gescab_db/api/v1/rdv/add").hasAuthority("Role_PATIENT");
        http.authorizeRequests().antMatchers(HttpMethod.PUT, "/gescab_db/api/v1/rdv/update/**").hasAuthority("Role_PATIENT");
        http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/gescab_db/api/v1/rdv/delete/**").hasAuthority("Role_PATIENT");
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/gescab_db/api/v1/rdv/getByPatient", "/gescab_db/api/v1/rdv/getByMedecin", "/gescab_db/api/v1/rdv/getByMedecinAndDate/**",
                "/gescab_db/api/v1/rdv/getByPatientAndDate/**", "/gescab_db/api/v1/rdv/getDistinctPatient/**", "/gescab_db/api/v1/rdv/getDistinctPatientAndDate/**",
                "/gescab_db/api/v1/rdv/getByPatientUpcomingRDV/**", "/gescab_db/api/v1/rdv/getByPatientPastRDV/**").hasAnyAuthority("Role_MEDECIN", "Role_PATIENT", "Role_SUPERADMIN", "Role_ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/gescab_db/api/v1/rdv/**").hasAnyAuthority("Role_MEDECIN", "Role_PATIENT", "Role_SUPERADMIN", "Role_ADMIN");
        http.authorizeRequests().anyRequest().authenticated();
        http.addFilter(new CustomAuthenticationFilter(authenticationManagerBean()));
        http.addFilterBefore(new CustomAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public WebMvcConfigurer corsConfigurer()
    {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/login").allowedOrigins("*");
            }
        };
    }
}
