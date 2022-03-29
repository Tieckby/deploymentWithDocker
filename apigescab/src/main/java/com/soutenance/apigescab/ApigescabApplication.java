package com.soutenance.apigescab;

import com.soutenance.apigescab.cabinetMedicale.CabinetMedicale;
import com.soutenance.apigescab.cabinetMedicale.CabinetMedicaleServiceImp;
import com.soutenance.apigescab.cabinetSpecialite.CabinetSpecialite;
import com.soutenance.apigescab.cabinetSpecialite.CabinetSpecialiteRepo;
import com.soutenance.apigescab.personnes.Etat;
import com.soutenance.apigescab.personnes.Personne;
import com.soutenance.apigescab.personnes.PersonneServiceImpl;
import com.soutenance.apigescab.personnes.Profile;
import com.soutenance.apigescab.personnes.role.Role;
import com.soutenance.apigescab.rive.Rive;
import com.soutenance.apigescab.rive.RiveServiceImpl;
import com.soutenance.apigescab.specialites.Specialite;
import com.soutenance.apigescab.specialites.SpecialiteServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.List;

/*
 * Author : Sogodogo Tiémoko
 * E-mail : tiemogosogodogo94@gmail.com
 * Address : Bamako/Mali
 *
 */

@SpringBootApplication
public class ApigescabApplication implements CommandLineRunner {
	@Autowired
	PersonneServiceImpl personneServiceImpl;

	@Autowired
	SpecialiteServiceImp specialiteServiceImp;

	@Autowired
	CabinetMedicaleServiceImp cabinetMedicaleServiceImp;

	@Autowired
	RiveServiceImpl riveServiceImpl;

	public static void main(String[] args) {
		SpringApplication.run(ApigescabApplication.class, args);
	}

	@Bean
	PasswordEncoder passwordEncoder(){
		return new BCryptPasswordEncoder();
	}

	@Override
	public void run(String... args) throws Exception {
		//Save default roles
		personneServiceImpl.saveRole(new Role(null, "Role_SUPERADMIN"));
		personneServiceImpl.saveRole(new Role(null, "Role_ADMIN"));
		personneServiceImpl.saveRole(new Role(null, "Role_MEDECIN"));
		personneServiceImpl.saveRole(new Role(null, "Role_PATIENT"));

		//Save default cabinet medicale
		Rive rive1 = new Rive(null, "Rive Gauche", null);
		Rive rive2 = new Rive(null, "Rive Droite", null);
		riveServiceImpl.saveRive(rive1);
		riveServiceImpl.saveRive(rive2);

		List<CabinetMedicale> cabinetMedicales = new ArrayList<>();
		cabinetMedicales.add(new CabinetMedicale(null, false, "Clinique Defi Santé",
				"Un cabinet à vos besoins", "Hamdallaye ACI","-8.02738", "12.63022", 23242723,
				"mycabinet@gmail.com", "8h00 à 21h00", 5000, null, null, rive1));

		cabinetMedicales.add(new CabinetMedicale(null, false, "Clinique Safari",
				"Un cabinet à vos besoins", "Magnambougou","-7.96874","12.61234",  23252523,
				"safari@gmail.com", "8h00 à 18h00", 10000, null, null, rive2));

		cabinetMedicales.add(new CabinetMedicale(null, false, "Clinic Solidarité",
				"Un cabinet à vos besoins", "Magnambougou","-7.95623","12.60646",  22367898,
				"c.solidarite@gmail.com", "8h00 à 18h00", 15000, null, null, rive2));

		cabinetMedicales.add(new CabinetMedicale(null, false, "Clinique Pasteur",
				"Un cabinet à vos besoins", "Hamdalaye","-8.02039","12.63306",  223242527,
				"pasteurClinique@gmail.com", "8h00 à 18h00", 7000, null, null, rive1));

		//Save default speciality
		List<Specialite> specialiteList = new ArrayList<>();
		specialiteList.add(new Specialite(null, false, "Généraliste", null, null));
		specialiteList.add(new Specialite(null, false, "Cardiologue", null, null));
		specialiteList.add(new Specialite(null, false, "Dermatologue", null, null));
		specialiteList.add(new Specialite(null, false, "Chirurgien", null, null));
		specialiteList.add(new Specialite(null, false, "Neurologue", null, null));

		for (CabinetMedicale cabinetMedicale : cabinetMedicales)
		{
			cabinetMedicaleServiceImp.ajouter_cabinetmedicale(cabinetMedicale);
			for(Specialite specialite : specialiteList)
			{
				specialiteServiceImp.addSpecialite(specialite);
				cabinetMedicaleServiceImp.saveCabinetSpecialite(cabinetMedicale, specialite);
			}
		}

		//Make a SUPERADMIN
		Personne superAdmin = new Personne(null, false, Etat.ACTIVER, Profile.SUPERADMIN, null, "Sogodogo", "Tiémoko", "Hamdallaye", 72346234,
				"odcgescabinet@gmail.com", "HOMME", "tieckby", "tieckby@test", "src/main/resources/assets/images/user.png");

		personneServiceImpl.ajouter_personne(superAdmin); //Save it
		personneServiceImpl.addRoleToPerson("tieckby", "Role_SUPERADMIN"); //Add role to person
	}
}
