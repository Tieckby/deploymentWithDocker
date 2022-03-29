package com.soutenance.apigescab.cabinetMedicale;

import com.soutenance.apigescab.rive.Rive;
import com.soutenance.apigescab.specialites.Specialite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "/gescab_db/api/v1/cabinetMedicale")
public class CabinetMedicaleController {
    @Autowired
    CabinetMedicaleServiceImp cabinetMedicaleServiceImp;

    //Ajouter un Cabinet Medicale
    @PostMapping("/add")
    public String addCabinetMedicale(@RequestBody CabinetMedicale cabinetMedicale){
        return cabinetMedicaleServiceImp.ajouter_cabinetmedicale(cabinetMedicale);
    }

    //Modifier un Cabinet Medicale
    @PutMapping ("/update/{id}")
    public String updateCabinetMedicale(@PathVariable Long id, @RequestBody CabinetMedicale cabinetMedicale){
        cabinetMedicaleServiceImp.modifier_cabinetmedicale(id , cabinetMedicale);

        return "Cabinet Médicale modifié avec succès !";
    }

    //Pour lister les cabinets Médicale
    @GetMapping ("/getAll")
    public List<CabinetMedicale> listerCabinetMedicale(){
        return cabinetMedicaleServiceImp.listeCabinetMedicale();
    }

    //Afficher Cabinet par son id
    @GetMapping("/getOne/{id}")
    public CabinetMedicale getCabinetMedicaleById(@PathVariable("id") Long id) {
        return cabinetMedicaleServiceImp.getCabinetMedicaleById(id);
    }

    //Supprimer un Cabinet Medicale
    @DeleteMapping ("/delete/{id}")
    public String supprimerCabinetMedicale(@PathVariable Long id){
        return cabinetMedicaleServiceImp.suprimer_cabinetmedicale(id);
    }

    @GetMapping("/restore/{id}")
    public String restoreCabinetMedicale(@PathVariable("id") Long id){
        return cabinetMedicaleServiceImp.restore_cabinetmedicale_suprimer(id);
    }

    @PostMapping("/getSpecialities")
    public List<Specialite> getCabinetSpecialities(@RequestBody CabinetMedicale cabinetMedicale)
    {
        return cabinetMedicaleServiceImp.getCabinetSpecialites(cabinetMedicale);
    }

    @PostMapping("/getByRive")
    public List<CabinetMedicale> getCabinetByRive(@RequestBody Rive rive)
    {
        return cabinetMedicaleServiceImp.getCabinetByRive(rive);
    }
}
