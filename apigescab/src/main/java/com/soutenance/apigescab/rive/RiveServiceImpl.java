package com.soutenance.apigescab.rive;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RiveServiceImpl implements RiveService
{
    @Autowired
    RiveRepository riveRepository;

    @Override
    public void saveRive(Rive rive) {
        riveRepository.save(rive);
    }

    @Override
    public List<Rive> getAllRive() {
        return riveRepository.findAll();
    }
}
