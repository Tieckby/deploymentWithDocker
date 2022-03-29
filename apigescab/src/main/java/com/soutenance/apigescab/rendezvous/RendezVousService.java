package com.soutenance.apigescab.rendezvous;
import com.soutenance.apigescab.personnes.medecin.Medecin;
import com.soutenance.apigescab.personnes.patient.Patient;

import java.time.LocalDate;
import java.util.List;

public interface RendezVousService {
    String ajouter_rendezvous(RendezVous rendezvous);
    void modifier_rendezvous(Long id, RendezVous rendezvous);
    String suprimer_rendezvous(Long id);
    String restore_rendezvous_suprimer(Long id);
    List<RendezVous> listeRendezVous();
    RendezVous getRendezVousById(Long id);
    Boolean validOrNotRDV(Long rdvId, Boolean isValid);

    //Get all RDV by Patient and by Medecin
    List<RendezVous> getRDVByPatient(Patient patient);
    List<RendezVous> getRDVByMedecin(Medecin medecin);
    List<RendezVous> getRDVByMedecinAndDate(Medecin medecin, LocalDate rdvDate);
    List<RendezVous> getRDVByPatientAndDate(Patient patient, LocalDate rdvDate);
    List<Patient> getDistinctPatient(Medecin medecin);
    List<Patient> getDistinctPatientAndDate(Medecin medecin, LocalDate rdvDate);

    List<RendezVous> getPatientUpComingRDV(Patient patient, LocalDate currentDate);
    List<RendezVous> getPatientPastRDV(Patient patient, LocalDate currentDate);
}
