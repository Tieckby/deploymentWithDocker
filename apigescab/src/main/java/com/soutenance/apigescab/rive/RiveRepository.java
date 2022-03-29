package com.soutenance.apigescab.rive;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RiveRepository extends JpaRepository<Rive, Long>
{

}