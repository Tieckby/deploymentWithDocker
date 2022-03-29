package com.soutenance.apigescab.rendezvous;

import com.soutenance.apigescab.EmailSenderService;
import com.soutenance.apigescab.personnes.medecin.Medecin;
import com.soutenance.apigescab.personnes.patient.Patient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class RendezVousServiceImp implements RendezVousService{
    @Autowired
    RendezVousRepository rendezVousRepository;

    @Autowired
    EmailSenderService emailSenderService;

    @Override
    public String ajouter_rendezvous(RendezVous rendezvous) {
        rendezvous.setHeureEcheance(rendezvous.getRdvHeure().plusMinutes(30));
        Optional<RendezVous> rdvExists = rendezVousRepository.findByRdvDateAndRdvHeureAndMedecin(rendezvous.getRdvDate(), rendezvous.getRdvHeure(), rendezvous.getMedecin());
        List<RendezVous> anotherRDV = rendezVousRepository.findByRdvDateAndHeureEcheanceAndMedecin(rendezvous.getRdvDate(), rendezvous.getRdvHeure(), rendezvous.getMedecin());

        LocalDate today = LocalDate.now();

        if(rendezvous.getRdvDate().isBefore(today))
        {
            return "avant";
        }

        if(rdvExists.isPresent() || !anotherRDV.isEmpty())
        {
            return null;
        }

        rendezVousRepository.save(rendezvous);
        return "Rendez-vous ajouté avec succès";
    }

    @Transactional
    @Override
    public void modifier_rendezvous(Long id, RendezVous rendezvous) {
        RendezVous existRDV = rendezVousRepository.findById(id).orElseThrow();
        existRDV.setRdvDate(rendezvous.getRdvDate());
        existRDV.setRdvHeure(rendezvous.getRdvHeure());
        existRDV.setHeureEcheance(rendezvous.getRdvHeure().plusMinutes(30));
        existRDV.setSymptom(rendezvous.getSymptom());
        existRDV.setMedecin(rendezvous.getMedecin());
        existRDV.setPatient(rendezvous.getPatient());
    }

    @Transactional
    @Override
    public String suprimer_rendezvous(Long id) {
        RendezVous existRDV = rendezVousRepository.findById(id).orElseThrow();
        existRDV.setIsDelete(true); //Set isDelete to TRUE for deletion

        return "Rendez-vous supprimé avec succès";
    }

    @Transactional
    @Override
    public String restore_rendezvous_suprimer(Long id) {
        RendezVous existRDV = rendezVousRepository.findById(id).orElseThrow();
        existRDV.setIsDelete(false); //Set isDelete to TRUE for deletion

        return "Rendez-vous restauré avec succès";
    }

    @Override
    public List<RendezVous> listeRendezVous() {
        return rendezVousRepository.findAll();
    }

    @Override
    public RendezVous getRendezVousById(Long id) {
        return rendezVousRepository.findById(id).orElseThrow();
    }

    @Override
    public List<RendezVous> getRDVByPatient(Patient patient) {
        return rendezVousRepository.findByPatientAndIsDelete(patient, false);
    }

    @Override
    public List<RendezVous> getRDVByMedecin(Medecin medecin) {
        return rendezVousRepository.findByMedecinAndIsDelete(medecin, false);
    }

    @Override
    public List<RendezVous> getRDVByMedecinAndDate(Medecin medecin, LocalDate rdvDate) {
        return rendezVousRepository.findByMedecinAndRdvDateAndIsDelete(medecin, rdvDate, false);
    }

    @Override
    public List<RendezVous> getRDVByPatientAndDate(Patient patient, LocalDate rdvDate) {
        return rendezVousRepository.findByPatientAndRdvDateAndIsDelete(patient, rdvDate, false);
    }

    @Override
    public List<Patient> getDistinctPatient(Medecin medecin) {
        return rendezVousRepository.findByMedecinAndDistinctPatient(medecin);
    }

    @Override
    public List<Patient> getDistinctPatientAndDate(Medecin medecin, LocalDate rdvDate) {
        return rendezVousRepository.findByMedecinAndDistinctPatientAndDate(medecin, rdvDate);
    }

    @Transactional
    @Override
    public Boolean validOrNotRDV(Long rdvId, Boolean isValid) {
        RendezVous rendezVous = rendezVousRepository.findById(rdvId).orElseThrow();
        rendezVous.setIsValid(isValid);

        if(isValid)
        {
            emailSenderService._sendEmail(rendezVous.getPatient().getEmail(),
                    "Votre rendez-vous a été accepté par "+rendezVous.getMedecin().getNom()+" "+rendezVous.getMedecin().getPrenom(), "Rendez-vous");
        }
        else
        {
            emailSenderService._sendEmail(rendezVous.getPatient().getEmail(),
                    "Votre rendez-vous a été annulé par "+rendezVous.getMedecin().getNom()+" "+rendezVous.getMedecin().getPrenom(), "Rendez-vous");
        }

        return isValid;
    }

    @Override
    public List<RendezVous> getPatientUpComingRDV(Patient patient, LocalDate currentDate) {
        return rendezVousRepository.getPatientUpcomingRDV(patient, currentDate);
    }

    @Override
    public List<RendezVous> getPatientPastRDV(Patient patient, LocalDate currentDate) {
        return rendezVousRepository.getPatientPastRDV(patient, currentDate);
    }
}
