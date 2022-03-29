package com.soutenance.apigescab.specialites;

import com.soutenance.apigescab.cabinetMedicale.CabinetMedicale;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class SpecialiteServiceImp implements SpecialiteService
{
    @Autowired
    SpecialiteRepository specialiteRepository;

    @Override
    public String addSpecialite(Specialite specialite) {
        specialiteRepository.save(specialite);

        return "Spécialité ajouté avec succès !";
    }

    @Transactional
    @Override
    public void modifySpecialite(Long id, Specialite specialite) {
        Specialite existSpecialite = specialiteRepository.findById(id).orElseThrow();
        existSpecialite.setNom(specialite.getNom());
    }

    @Transactional
    @Override
    public String deleteSpecialite(Long id) {
        Specialite existSpecialite = specialiteRepository.findById(id).orElseThrow();
        existSpecialite.setIsDelete(true);

        return "Spécialité supprimé avec succès";
    }

    @Transactional
    @Override
    public String restoreSpecialite(Long id) {
        Specialite existSpecialite = specialiteRepository.findById(id).orElseThrow();
        existSpecialite.setIsDelete(false);

        return "Spécialité restauré avec succès";
    }

    @Override
    public List<Specialite> getAllSpecialtes() {
        return specialiteRepository.findAll();
    }

    @Override
    public Specialite getOneSpecialite(Long id) {
        return specialiteRepository.findById(id).orElseThrow();
    }
}
