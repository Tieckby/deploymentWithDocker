package com.soutenance.apigescab.rendezvous;

import com.soutenance.apigescab.personnes.medecin.Medecin;
import com.soutenance.apigescab.personnes.patient.Patient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping(path = "/gescab_db/api/v1/rdv")
public class RendezVousController
{
    @Autowired
    RendezVousRepository rendezVousRepository;

    @Autowired
    RendezVousServiceImp rendezVousServiceImp;

    @PostMapping("/add")
    public String addRDV(@RequestBody RendezVous rendezVous){
        return rendezVousServiceImp.ajouter_rendezvous(rendezVous);
    }

    @PutMapping("/update/{id}")
    public String updateRDV(@PathVariable("id") Long id, @RequestBody RendezVous rendezVous){
        Optional<RendezVous> rdvExists = rendezVousRepository.findByRdvDateAndRdvHeureAndMedecin(rendezVous.getRdvDate(), rendezVous.getRdvHeure(), rendezVous.getMedecin());
        List<RendezVous> anotherRDV = rendezVousRepository.findByRdvDateAndHeureEcheanceAndMedecin(rendezVous.getRdvDate(), rendezVous.getRdvHeure(), rendezVous.getMedecin());

        LocalDate today = LocalDate.now();

        if(rendezVous.getRdvDate().isBefore(today))
        {
            return null;
        }

        if(rdvExists.isPresent() || !anotherRDV.isEmpty())
        {
            return null;
        }

        rendezVousServiceImp.modifier_rendezvous(id, rendezVous);
        return "Rendez-vous modifié avec succès";
    }

    @DeleteMapping("/delete/{id}")
    public String deleteRDV(@PathVariable("id") Long id){
        return rendezVousServiceImp.suprimer_rendezvous(id);
    }

    @GetMapping("/restore/{id}")
    public String restoreRDV(@PathVariable("id") Long id){
        return rendezVousServiceImp.restore_rendezvous_suprimer(id);
    }

    @GetMapping("/getAll")
    public List<RendezVous> getAllRDV(){
        return rendezVousServiceImp.listeRendezVous();
    }

    @GetMapping("/getOne/{id}")
    public RendezVous getOneRDV(@PathVariable("id") Long id){
        return rendezVousServiceImp.getRendezVousById(id);
    }

    @GetMapping("/validRDV/{id}/{isValid}")
    public Boolean validRdv(@PathVariable("id") Long rdvId, @PathVariable("isValid") Boolean isValid)
    {
        return rendezVousServiceImp.validOrNotRDV(rdvId, isValid);
    }

    @PostMapping("/getByPatient")
    public List<RendezVous> getRDVByPatient(@RequestBody Patient patient)
    {
        return rendezVousServiceImp.getRDVByPatient(patient);
    }

    @PostMapping("/getByMedecin")
    public List<RendezVous> getRDVByMedecin(@RequestBody Medecin medecin)
    {
        return rendezVousServiceImp.getRDVByMedecin(medecin);
    }

    @PostMapping("/getByMedecinAndDate/{rdvDate}")
    public List<RendezVous> getRDVByMedecinAndDate(@RequestBody Medecin medecin, @PathVariable("rdvDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate rdvDate)
    {
        return rendezVousServiceImp.getRDVByMedecinAndDate(medecin, rdvDate);
    }

    @PostMapping("/getByPatientAndDate/{rdvDate}")
    public List<RendezVous> getRDVByPatientAndDate(@RequestBody Patient patient, @PathVariable("rdvDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate rdvDate)
    {
        return rendezVousServiceImp.getRDVByPatientAndDate(patient, rdvDate);
    }

    @PostMapping("/getDistinctPatient")
    public List<Patient> getDistinctPatient(@RequestBody Medecin medecin)
    {
        return rendezVousServiceImp.getDistinctPatient(medecin);
    }

    @PostMapping("/getDistinctPatientAndDate/{rdvDate}")
    public List<Patient> getDistinctPatientAndDate(@RequestBody Medecin medecin, @PathVariable("rdvDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate rdvDate)
    {
        return rendezVousServiceImp.getDistinctPatientAndDate(medecin, rdvDate);
    }

    @PostMapping("/getByPatientUpcomingRDV/{currentDate}")
    public List<RendezVous> getPatientUpcomingRDV(@RequestBody Patient patient,
                                                  @PathVariable("currentDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate currentDate)
    {
        return rendezVousServiceImp.getPatientUpComingRDV(patient, currentDate);
    }

    @PostMapping("/getByPatientPastRDV/{currentDate}")
    public List<RendezVous> getPatientPastRDV(@RequestBody Patient patient,
                                                  @PathVariable("currentDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate currentDate)
    {
        return rendezVousServiceImp.getPatientPastRDV(patient, currentDate);
    }
}
