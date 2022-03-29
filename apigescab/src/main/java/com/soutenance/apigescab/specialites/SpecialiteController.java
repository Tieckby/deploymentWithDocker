package com.soutenance.apigescab.specialites;

import com.soutenance.apigescab.cabinetMedicale.CabinetMedicale;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "/gescab_db/api/v1/specialite")
public class SpecialiteController
{
    @Autowired
    SpecialiteServiceImp specialiteServiceImp;

    @PostMapping("/add")
    public String addSpeciality(@RequestBody Specialite specialite){
        return specialiteServiceImp.addSpecialite(specialite);
    }

    @PutMapping("/update/{id}")
    public String updateSpeciality(@PathVariable("id") Long id, @RequestBody Specialite specialite){
        specialiteServiceImp.modifySpecialite(id, specialite);

        return "Spécialité modifié avec succès !";
    }

    @DeleteMapping("/delete/{id}")
    public String deleteSpeciality(@PathVariable("id") Long id){
        return specialiteServiceImp.deleteSpecialite(id);
    }

    @GetMapping("/restore/{id}")
    public String restoreSpeciality(@PathVariable("id") Long id){
        return specialiteServiceImp.restoreSpecialite(id);
    }

    @GetMapping("/getAll")
    public List<Specialite> getAllSpeciality(){
        return specialiteServiceImp.getAllSpecialtes();
    }

    @GetMapping("/getOne/{id}")
    public Specialite getOneSpeciality(@PathVariable("id") Long id){
        return specialiteServiceImp.getOneSpecialite(id);
    }
}
