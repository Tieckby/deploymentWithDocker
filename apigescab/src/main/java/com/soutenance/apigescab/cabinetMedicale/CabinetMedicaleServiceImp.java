package com.soutenance.apigescab.cabinetMedicale;

import com.soutenance.apigescab.cabinetSpecialite.CabinetSpecialite;
import com.soutenance.apigescab.cabinetSpecialite.CabinetSpecialiteRepo;
import com.soutenance.apigescab.rive.Rive;
import com.soutenance.apigescab.specialites.Specialite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class CabinetMedicaleServiceImp implements CabinetMedicaleService{
    @Autowired
    CabinetMedicalRepository cabinetMedicalRepository;

    @Autowired
    CabinetSpecialiteRepo cabinetSpecialiteRepo;

    @Override
    public String ajouter_cabinetmedicale(CabinetMedicale cabinetmedicale) {
        cabinetMedicalRepository.save(cabinetmedicale);

        return "Cabinet Medicale ajouté avec succès !";
    }

    @Transactional
    @Override
    public void modifier_cabinetmedicale(Long id, CabinetMedicale cabinetmedicale) {
        CabinetMedicale _cabinetMedicale = cabinetMedicalRepository.findById(id).orElseThrow();
        _cabinetMedicale.setNom(cabinetmedicale.getNom());
        _cabinetMedicale.setAdresse(cabinetmedicale.getAdresse());
        _cabinetMedicale.setTelephone(cabinetmedicale.getTelephone());
        _cabinetMedicale.setEmail(cabinetmedicale.getEmail());
        _cabinetMedicale.setHoraire(cabinetmedicale.getHoraire());
        _cabinetMedicale.setTarifsConsultations(cabinetmedicale.getTarifsConsultations());
        _cabinetMedicale.setMedecinList(cabinetmedicale.getMedecinList());
    }

    @Transactional
    @Override
    public String suprimer_cabinetmedicale(Long id) {
        CabinetMedicale deleteCabinetMedicale = cabinetMedicalRepository.findById(id).orElseThrow();
        deleteCabinetMedicale.setIsDelete(true); //Set isDelete to TRUE for deletion

        return "Cabinet médicale supprimé avec succès";
    }

    @Transactional
    @Override
    public String restore_cabinetmedicale_suprimer(Long id) {
        CabinetMedicale deleteCabinetMedicale = cabinetMedicalRepository.findById(id).orElseThrow();
        deleteCabinetMedicale.setIsDelete(false); //Set isDelete to TRUE for deletion

        return "Cabinet médicale restauré avec succès";
    }

    @Override
    public List<CabinetMedicale> listeCabinetMedicale() {
        return cabinetMedicalRepository.findAll();
    }

    @Override
    public CabinetMedicale getCabinetMedicaleById(Long id) {
        return cabinetMedicalRepository.findById(id).orElseThrow();
    }

    @Override
    public List<Specialite> getCabinetSpecialites(CabinetMedicale cabinetMedicale) {
        return cabinetSpecialiteRepo.findSpecialiteByCabinetMedicale(cabinetMedicale);
    }

    @Override
    public void saveCabinetSpecialite(CabinetMedicale cabinetMedicale, Specialite specialite) {
        cabinetSpecialiteRepo.save(new CabinetSpecialite(null, cabinetMedicale, specialite));
    }

    @Override
    public List<CabinetMedicale> getCabinetByRive(Rive rive) {
        return cabinetMedicalRepository.findByRive(rive);
    }
}
