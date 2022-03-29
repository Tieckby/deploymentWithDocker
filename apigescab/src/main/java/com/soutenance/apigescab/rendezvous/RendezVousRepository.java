package com.soutenance.apigescab.rendezvous;

import com.soutenance.apigescab.personnes.medecin.Medecin;
import com.soutenance.apigescab.personnes.patient.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface RendezVousRepository extends JpaRepository<RendezVous, Long>
{
    List<RendezVous> findByPatientAndIsDelete(Patient patient, Boolean isDelete);
    List<RendezVous> findByMedecinAndIsDelete(Medecin medecin, Boolean isDelete);
    List<RendezVous> findByMedecinAndRdvDateAndIsDelete(Medecin medecin, LocalDate rdvDate, Boolean isDelete);
    List<RendezVous> findByPatientAndRdvDateAndIsDelete(Patient patient, LocalDate rdvDate, Boolean isDelete);

    Optional<RendezVous> findByRdvDateAndRdvHeureAndMedecin(LocalDate rdvDate, LocalTime rdvHeure, Medecin medecin);

    @Query("SELECT rdv FROM RendezVous rdv WHERE rdv.rdvDate=:date AND rdv.heureEcheance >= :heure AND rdv.medecin=:medecin")
    List<RendezVous> findByRdvDateAndHeureEcheanceAndMedecin(@Param("date") LocalDate rdvDate, @Param("heure") LocalTime rdvHeure, @Param("medecin") Medecin medecin);

    @Query("SELECT DISTINCT(rdv.patient) FROM RendezVous rdv WHERE rdv.isDelete=FALSE AND rdv.medecin=:medecin")
    List<Patient> findByMedecinAndDistinctPatient(@Param("medecin") Medecin medecin);

    @Query("SELECT DISTINCT(rdv.patient) FROM RendezVous rdv WHERE rdv.isDelete=FALSE AND rdv.medecin=:medecin AND rdv.rdvDate=:rdvDate")
    List<Patient> findByMedecinAndDistinctPatientAndDate(@Param("medecin") Medecin medecin, @Param("rdvDate") LocalDate rdvDate);

    //Get Patient Upcoming RDV
    @Query("SELECT rdv FROM RendezVous rdv WHERE rdv.isDelete=FALSE AND rdv.patient=:patient AND rdv.rdvDate > :currentDate")
    List<RendezVous> getPatientUpcomingRDV(@Param("patient") Patient patient, @Param("currentDate") LocalDate currentDate);

    //Get Patient Past RDV
    @Query("SELECT rdv FROM RendezVous rdv WHERE rdv.isDelete=FALSE AND rdv.patient=:patient AND rdv.rdvDate < :currentDate")
    List<RendezVous> getPatientPastRDV(@Param("patient") Patient patient, @Param("currentDate") LocalDate currentDate);

}
