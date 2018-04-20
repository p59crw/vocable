import { Injectable } from '@angular/core';
import { Consonant, Vowel } from './../class/index';
import { Height, Backness, Place, Manner, Unicode } from './../enum/index';

@Injectable()
export class IpaService {
  consonants: Consonant[] = [];
  vowels: Vowel[] = [];
  nasals: Consonant[] = [];
  stops: Consonant[] = [];
  sibilantAffricates: Consonant[] = [];
  nonsibilantAffricates: Consonant[] = [];
  sibilantFricatives: Consonant[] = [];
  nonsibilantFricatives: Consonant[] = [];
  approximants: Consonant[] = [];
  taps: Consonant[] = [];
  trills: Consonant[] = [];
  lateralAffricates: Consonant[] = [];
  lateralFricatives: Consonant[] = [];
  lateralApproximants: Consonant[] = [];
  lateralTaps: Consonant[] = [];

  constrtor() { }

  initIPA() {
    /* Init consonants */
    this.nasals = [
      new Consonant(Place.Bilabial, Manner.Nasal, false, Unicode.c_bil_nas_u),
      new Consonant(Place.Bilabial, Manner.Nasal, true, Unicode.c_bil_nas_v),
      new Consonant(Place.Labiodental, Manner.Nasal, false, Unicode.c_lab_nas_u),
      new Consonant(Place.Labiodental, Manner.Nasal, true, Unicode.c_lab_nas_v),
      new Consonant(Place.Linguolabial, Manner.Nasal, false, Unicode.c_lin_nas_u),
      new Consonant(Place.Linguolabial, Manner.Nasal, true, Unicode.c_lin_nas_v),
      new Consonant(Place.Dental, Manner.Nasal, false, Unicode.c_den_nas_u),
      new Consonant(Place.Dental, Manner.Nasal, true, Unicode.c_den_nas_v),
      new Consonant(Place.Alveolar, Manner.Nasal, false, Unicode.c_alv_nas_u),
      new Consonant(Place.Alveolar, Manner.Nasal, true, Unicode.c_alv_nas_v),
      new Consonant(Place.Postalveolar, Manner.Nasal, false, Unicode.c_pos_nas_u),
      new Consonant(Place.Postalveolar, Manner.Nasal, true, Unicode.c_pos_nas_v),
      new Consonant(Place.Retroflex, Manner.Nasal, false, Unicode.c_ret_nas_u),
      new Consonant(Place.Retroflex, Manner.Nasal, true, Unicode.c_ret_nas_v),
      new Consonant(Place.Palatal, Manner.Nasal, false, Unicode.c_pal_nas_u),
      new Consonant(Place.Palatal, Manner.Nasal, true, Unicode.c_pal_nas_v),
      new Consonant(Place.Velar, Manner.Nasal, false, Unicode.c_vel_nas_u),
      new Consonant(Place.Velar, Manner.Nasal, true, Unicode.c_vel_nas_v),
      new Consonant(Place.Uvular, Manner.Nasal, false, Unicode.c_uvu_nas_u),
      new Consonant(Place.Uvular, Manner.Nasal, true, Unicode.c_uvu_nas_v),
      new Consonant(Place.Pharyngeal, Manner.Nasal, false, null),
      new Consonant(Place.Pharyngeal, Manner.Nasal, true, null),
      new Consonant(Place.Glottal, Manner.Nasal, false, null),
      new Consonant(Place.Glottal, Manner.Nasal, true, null)
    ];

    this.stops = [
      new Consonant(Place.Bilabial, Manner.Stop, false, Unicode.c_bil_st_u),
      new Consonant(Place.Bilabial, Manner.Stop, true, Unicode.c_bil_st_v),
      new Consonant(Place.Labiodental, Manner.Stop, false, Unicode.c_lab_st_u),
      new Consonant(Place.Labiodental, Manner.Stop, true, Unicode.c_lab_st_v),
      new Consonant(Place.Linguolabial, Manner.Stop, false, Unicode.c_lin_st_u),
      new Consonant(Place.Linguolabial, Manner.Stop, true, Unicode.c_lin_st_v),
      new Consonant(Place.Dental, Manner.Stop, false, Unicode.c_den_st_u),
      new Consonant(Place.Dental, Manner.Stop, true, Unicode.c_den_st_v),
      new Consonant(Place.Alveolar, Manner.Stop, false, Unicode.c_alv_st_u),
      new Consonant(Place.Alveolar, Manner.Stop, true, Unicode.c_alv_st_v),
      new Consonant(Place.Postalveolar, Manner.Stop, false, Unicode.c_pos_st_u),
      new Consonant(Place.Postalveolar, Manner.Stop, true, Unicode.c_pos_st_v),
      new Consonant(Place.Retroflex, Manner.Stop, false, Unicode.c_ret_st_u),
      new Consonant(Place.Retroflex, Manner.Stop, true, Unicode.c_ret_st_v),
      new Consonant(Place.Palatal, Manner.Stop, false, Unicode.c_pal_st_u),
      new Consonant(Place.Palatal, Manner.Stop, true, Unicode.c_pal_st_v),
      new Consonant(Place.Velar, Manner.Stop, false, Unicode.c_vel_st_u),
      new Consonant(Place.Velar, Manner.Stop, true, Unicode.c_vel_st_v),
      new Consonant(Place.Uvular, Manner.Stop, false, Unicode.c_uvu_st_u),
      new Consonant(Place.Uvular, Manner.Stop, true, Unicode.c_uvu_st_v),
      new Consonant(Place.Pharyngeal, Manner.Stop, false, Unicode.c_pha_st_u),
      new Consonant(Place.Pharyngeal, Manner.Stop, true, null),
      new Consonant(Place.Glottal, Manner.Stop, false, Unicode.c_glo_st_u),
      new Consonant(Place.Glottal, Manner.Stop, true, null)
    ];

    this.sibilantAffricates = [
      new Consonant(Place.Bilabial, Manner.Sibilant_Affricate, false, null),
      new Consonant(Place.Bilabial, Manner.Sibilant_Affricate, true, null),
      new Consonant(Place.Labiodental, Manner.Sibilant_Affricate, false, null),
      new Consonant(Place.Labiodental, Manner.Sibilant_Affricate, true, null),
      new Consonant(Place.Linguolabial, Manner.Sibilant_Affricate, false, null),
      new Consonant(Place.Linguolabial, Manner.Sibilant_Affricate, true, null),
      new Consonant(Place.Dental, Manner.Sibilant_Affricate, false, Unicode.c_den_saff_u),
      new Consonant(Place.Dental, Manner.Sibilant_Affricate, true, Unicode.c_den_saff_v),
      new Consonant(Place.Alveolar, Manner.Sibilant_Affricate, false, Unicode.c_alv_saff_u),
      new Consonant(Place.Alveolar, Manner.Sibilant_Affricate, true, Unicode.c_alv_saff_v),
      new Consonant(Place.Postalveolar, Manner.Sibilant_Affricate, false, Unicode.c_pos_saff_u),
      new Consonant(Place.Postalveolar, Manner.Sibilant_Affricate, true, Unicode.c_pos_saff_v),
      new Consonant(Place.Retroflex, Manner.Sibilant_Affricate, false, Unicode.c_ret_saff_u),
      new Consonant(Place.Retroflex, Manner.Sibilant_Affricate, true, Unicode.c_ret_saff_v),
      new Consonant(Place.Palatal, Manner.Sibilant_Affricate, false, Unicode.c_pal_saff_u),
      new Consonant(Place.Palatal, Manner.Sibilant_Affricate, true, Unicode.c_pal_saff_v),
      new Consonant(Place.Velar, Manner.Sibilant_Affricate, false, null),
      new Consonant(Place.Velar, Manner.Sibilant_Affricate, true, null),
      new Consonant(Place.Uvular, Manner.Sibilant_Affricate, false, null),
      new Consonant(Place.Uvular, Manner.Sibilant_Affricate, true, null),
      new Consonant(Place.Pharyngeal, Manner.Sibilant_Affricate, false, null),
      new Consonant(Place.Pharyngeal, Manner.Sibilant_Affricate, true, null),
      new Consonant(Place.Glottal, Manner.Sibilant_Affricate, false, null),
      new Consonant(Place.Glottal, Manner.Sibilant_Affricate, true, null)
    ];

    this.nonsibilantAffricates = [
      new Consonant(Place.Bilabial, Manner.Nonsibilant_Affricate, false, Unicode.c_bil_nonsaff_u),
      new Consonant(Place.Bilabial, Manner.Nonsibilant_Affricate, true, Unicode.c_bil_nonsaff_v),
      new Consonant(Place.Labiodental, Manner.Nonsibilant_Affricate, false, Unicode.c_lab_nonsaff_u),
      new Consonant(Place.Labiodental, Manner.Nonsibilant_Affricate, true, Unicode.c_lab_nonsaff_v),
      new Consonant(Place.Linguolabial, Manner.Nonsibilant_Affricate, false, Unicode.c_lin_nonsaff_u),
      new Consonant(Place.Linguolabial, Manner.Nonsibilant_Affricate, true, Unicode.c_lin_nonsaff_v),
      new Consonant(Place.Dental, Manner.Nonsibilant_Affricate, false, Unicode.c_den_nonsaff_u),
      new Consonant(Place.Dental, Manner.Nonsibilant_Affricate, true, Unicode.c_den_nonsaff_v),
      new Consonant(Place.Alveolar, Manner.Nonsibilant_Affricate, false, Unicode.c_alv_nonsaff_u),
      new Consonant(Place.Alveolar, Manner.Nonsibilant_Affricate, true, Unicode.c_alv_nonsaff_v),
      new Consonant(Place.Postalveolar, Manner.Nonsibilant_Affricate, false, Unicode.c_pos_nonsaff_u),
      new Consonant(Place.Postalveolar, Manner.Nonsibilant_Affricate, true, Unicode.c_pos_nonsaff_v),
      new Consonant(Place.Retroflex, Manner.Nonsibilant_Affricate, false, Unicode.c_ret_nonsaff_u),
      new Consonant(Place.Retroflex, Manner.Nonsibilant_Affricate, true, Unicode.c_ret_nonsaff_v),
      new Consonant(Place.Palatal, Manner.Nonsibilant_Affricate, false, Unicode.c_pal_nonsaff_u),
      new Consonant(Place.Palatal, Manner.Nonsibilant_Affricate, true, Unicode.c_pal_nonsaff_v),
      new Consonant(Place.Velar, Manner.Nonsibilant_Affricate, false, Unicode.c_vel_nonsaff_u),
      new Consonant(Place.Velar, Manner.Nonsibilant_Affricate, true, Unicode.c_vel_nonsaff_v),
      new Consonant(Place.Uvular, Manner.Nonsibilant_Affricate, false, Unicode.c_uvu_nonsaff_u),
      new Consonant(Place.Uvular, Manner.Nonsibilant_Affricate, true, Unicode.c_uvu_nonsaff_v),
      new Consonant(Place.Pharyngeal, Manner.Nonsibilant_Affricate, false, Unicode.c_pha_nonsaff_u),
      new Consonant(Place.Pharyngeal, Manner.Nonsibilant_Affricate, true, Unicode.c_pha_nonsaff_v),
      new Consonant(Place.Glottal, Manner.Nonsibilant_Affricate, false, Unicode.c_glo_nonsaff_u),
      new Consonant(Place.Glottal, Manner.Nonsibilant_Affricate, true, null)
    ];

    this.sibilantFricatives = [
      new Consonant(Place.Bilabial, Manner.Sibilant_Fricative, false, null),
      new Consonant(Place.Bilabial, Manner.Sibilant_Fricative, true, null),
      new Consonant(Place.Labiodental, Manner.Sibilant_Fricative, false, null),
      new Consonant(Place.Labiodental, Manner.Sibilant_Fricative, true, null),
      new Consonant(Place.Linguolabial, Manner.Sibilant_Fricative, false, null),
      new Consonant(Place.Linguolabial, Manner.Sibilant_Fricative, true, null),
      new Consonant(Place.Dental, Manner.Sibilant_Fricative, false, Unicode.c_den_sfri_u),
      new Consonant(Place.Dental, Manner.Sibilant_Fricative, true, Unicode.c_den_sfri_v),
      new Consonant(Place.Alveolar, Manner.Sibilant_Fricative, false, Unicode.c_alv_sfri_u),
      new Consonant(Place.Alveolar, Manner.Sibilant_Fricative, true, Unicode.c_alv_sfri_v),
      new Consonant(Place.Postalveolar, Manner.Sibilant_Fricative, false, Unicode.c_pos_sfri_u),
      new Consonant(Place.Postalveolar, Manner.Sibilant_Fricative, true, Unicode.c_pos_sfri_v),
      new Consonant(Place.Retroflex, Manner.Sibilant_Fricative, false, Unicode.c_ret_sfri_u),
      new Consonant(Place.Retroflex, Manner.Sibilant_Fricative, true, Unicode.c_ret_sfri_v),
      new Consonant(Place.Palatal, Manner.Sibilant_Fricative, false, Unicode.c_pal_sfri_u),
      new Consonant(Place.Palatal, Manner.Sibilant_Fricative, true, Unicode.c_pal_sfri_v),
      new Consonant(Place.Velar, Manner.Sibilant_Fricative, false, null),
      new Consonant(Place.Velar, Manner.Sibilant_Fricative, true, null),
      new Consonant(Place.Uvular, Manner.Sibilant_Fricative, false, null),
      new Consonant(Place.Uvular, Manner.Sibilant_Fricative, true, null),
      new Consonant(Place.Pharyngeal, Manner.Sibilant_Fricative, false, null),
      new Consonant(Place.Pharyngeal, Manner.Sibilant_Fricative, true, null),
      new Consonant(Place.Glottal, Manner.Sibilant_Fricative, false, null),
      new Consonant(Place.Glottal, Manner.Sibilant_Fricative, true, null)
    ];

    this.nonsibilantFricatives = [
      new Consonant(Place.Bilabial, Manner.Nonsibilant_Fricative, false, Unicode.c_bil_nonsfri_u),
      new Consonant(Place.Bilabial, Manner.Nonsibilant_Fricative, true, Unicode.c_bil_nonsfri_v),
      new Consonant(Place.Labiodental, Manner.Nonsibilant_Fricative, false, Unicode.c_lab_nonsfri_u),
      new Consonant(Place.Labiodental, Manner.Nonsibilant_Fricative, true, Unicode.c_lab_nonsfri_v),
      new Consonant(Place.Linguolabial, Manner.Nonsibilant_Fricative, false, Unicode.c_lin_nonsfri_u),
      new Consonant(Place.Linguolabial, Manner.Nonsibilant_Fricative, true, Unicode.c_lin_nonsfri_v),
      new Consonant(Place.Dental, Manner.Nonsibilant_Fricative, false, Unicode.c_den_nonsfri_u),
      new Consonant(Place.Dental, Manner.Nonsibilant_Fricative, true, Unicode.c_den_nonsfri_v),
      new Consonant(Place.Alveolar, Manner.Nonsibilant_Fricative, false, Unicode.c_alv_nonsfri_u),
      new Consonant(Place.Alveolar, Manner.Nonsibilant_Fricative, true, Unicode.c_alv_nonsfri_v),
      new Consonant(Place.Postalveolar, Manner.Nonsibilant_Fricative, false, Unicode.c_pos_nonsfri_u),
      new Consonant(Place.Postalveolar, Manner.Nonsibilant_Fricative, true, Unicode.c_pos_nonsfri_v),
      new Consonant(Place.Retroflex, Manner.Nonsibilant_Fricative, false, Unicode.c_ret_nonsfri_u),
      new Consonant(Place.Retroflex, Manner.Nonsibilant_Fricative, true, Unicode.c_ret_nonsfri_v),
      new Consonant(Place.Palatal, Manner.Nonsibilant_Fricative, false, Unicode.c_pal_nonsfri_u),
      new Consonant(Place.Palatal, Manner.Nonsibilant_Fricative, true, Unicode.c_pal_nonsfri_v),
      new Consonant(Place.Velar, Manner.Nonsibilant_Fricative, false, Unicode.c_vel_nonsfri_u),
      new Consonant(Place.Velar, Manner.Nonsibilant_Fricative, true, Unicode.c_vel_nonsfri_v),
      new Consonant(Place.Uvular, Manner.Nonsibilant_Fricative, false, Unicode.c_uvu_nonsfri_u),
      new Consonant(Place.Uvular, Manner.Nonsibilant_Fricative, true, Unicode.c_uvu_nonsfri_v),
      new Consonant(Place.Pharyngeal, Manner.Nonsibilant_Fricative, false, Unicode.c_pha_nonsfri_u),
      new Consonant(Place.Pharyngeal, Manner.Nonsibilant_Fricative, true, Unicode.c_pha_nonsfri_v),
      new Consonant(Place.Glottal, Manner.Nonsibilant_Fricative, false, Unicode.c_glo_nonsfri_u),
      new Consonant(Place.Glottal, Manner.Nonsibilant_Fricative, true, Unicode.c_glo_nonsfri_v)
    ];

    this.approximants = [
      new Consonant(Place.Bilabial, Manner.Approximant, false, Unicode.c_bil_app_u),
      new Consonant(Place.Bilabial, Manner.Approximant, true, Unicode.c_bil_app_v),
      new Consonant(Place.Labiodental, Manner.Approximant, false, Unicode.c_lab_app_u),
      new Consonant(Place.Labiodental, Manner.Approximant, true, Unicode.c_lab_app_v),
      new Consonant(Place.Linguolabial, Manner.Approximant, false, Unicode.c_lin_app_u),
      new Consonant(Place.Linguolabial, Manner.Approximant, true, Unicode.c_lin_app_v),
      new Consonant(Place.Dental, Manner.Approximant, false, Unicode.c_den_app_u),
      new Consonant(Place.Dental, Manner.Approximant, true, Unicode.c_den_app_v),
      new Consonant(Place.Alveolar, Manner.Approximant, false, Unicode.c_alv_app_u),
      new Consonant(Place.Alveolar, Manner.Approximant, true, Unicode.c_alv_app_v),
      new Consonant(Place.Postalveolar, Manner.Approximant, false, Unicode.c_pos_app_u),
      new Consonant(Place.Postalveolar, Manner.Approximant, true, Unicode.c_pos_app_v),
      new Consonant(Place.Retroflex, Manner.Approximant, false, Unicode.c_ret_app_u),
      new Consonant(Place.Retroflex, Manner.Approximant, true, Unicode.c_ret_app_v),
      new Consonant(Place.Palatal, Manner.Approximant, false, Unicode.c_pal_app_u),
      new Consonant(Place.Palatal, Manner.Approximant, true, Unicode.c_pal_app_v),
      new Consonant(Place.Velar, Manner.Approximant, false, Unicode.c_vel_app_u),
      new Consonant(Place.Velar, Manner.Approximant, true, Unicode.c_vel_app_v),
      new Consonant(Place.Uvular, Manner.Approximant, false, Unicode.c_uvu_app_u),
      new Consonant(Place.Uvular, Manner.Approximant, true, Unicode.c_uvu_app_v),
      new Consonant(Place.Pharyngeal, Manner.Approximant, false, Unicode.c_pha_app_u),
      new Consonant(Place.Pharyngeal, Manner.Approximant, true, Unicode.c_pha_app_v),
      new Consonant(Place.Glottal, Manner.Approximant, false, Unicode.c_glo_app_u),
      new Consonant(Place.Glottal, Manner.Approximant, true, Unicode.c_glo_app_v)
    ];

    this.taps = [
      new Consonant(Place.Bilabial, Manner.Tap, false, null),
      new Consonant(Place.Bilabial, Manner.Tap, true, null),
      new Consonant(Place.Labiodental, Manner.Tap, false, null),
      new Consonant(Place.Labiodental, Manner.Tap, true, null),
      new Consonant(Place.Linguolabial, Manner.Tap, false, null),
      new Consonant(Place.Linguolabial, Manner.Tap, true, null),
      new Consonant(Place.Dental, Manner.Tap, false, null),
      new Consonant(Place.Dental, Manner.Tap, true, null),
      new Consonant(Place.Alveolar, Manner.Tap, false, null),
      new Consonant(Place.Alveolar, Manner.Tap, true, null),
      new Consonant(Place.Postalveolar, Manner.Tap, false, null),
      new Consonant(Place.Postalveolar, Manner.Tap, true, null),
      new Consonant(Place.Retroflex, Manner.Tap, false, null),
      new Consonant(Place.Retroflex, Manner.Tap, true, null),
      new Consonant(Place.Palatal, Manner.Tap, false, null),
      new Consonant(Place.Palatal, Manner.Tap, true, null),
      new Consonant(Place.Velar, Manner.Tap, false, null),
      new Consonant(Place.Velar, Manner.Tap, true, null),
      new Consonant(Place.Uvular, Manner.Tap, false, null),
      new Consonant(Place.Uvular, Manner.Tap, true, null),
      new Consonant(Place.Pharyngeal, Manner.Tap, false, null),
      new Consonant(Place.Pharyngeal, Manner.Tap, true, null),
      new Consonant(Place.Glottal, Manner.Tap, false, null),
      new Consonant(Place.Glottal, Manner.Tap, true, null)
    ];

    this.trills = [
      new Consonant(Place.Bilabial, Manner.Trill, false, null),
      new Consonant(Place.Bilabial, Manner.Trill, true, null),
      new Consonant(Place.Labiodental, Manner.Trill, false, null),
      new Consonant(Place.Labiodental, Manner.Trill, true, null),
      new Consonant(Place.Linguolabial, Manner.Trill, false, null),
      new Consonant(Place.Linguolabial, Manner.Trill, true, null),
      new Consonant(Place.Dental, Manner.Trill, false, null),
      new Consonant(Place.Dental, Manner.Trill, true, null),
      new Consonant(Place.Alveolar, Manner.Trill, false, null),
      new Consonant(Place.Alveolar, Manner.Trill, true, null),
      new Consonant(Place.Postalveolar, Manner.Trill, false, null),
      new Consonant(Place.Postalveolar, Manner.Trill, true, null),
      new Consonant(Place.Retroflex, Manner.Trill, false, null),
      new Consonant(Place.Retroflex, Manner.Trill, true, null),
      new Consonant(Place.Palatal, Manner.Trill, false, null),
      new Consonant(Place.Palatal, Manner.Trill, true, null),
      new Consonant(Place.Velar, Manner.Trill, false, null),
      new Consonant(Place.Velar, Manner.Trill, true, null),
      new Consonant(Place.Uvular, Manner.Trill, false, null),
      new Consonant(Place.Uvular, Manner.Trill, true, null),
      new Consonant(Place.Pharyngeal, Manner.Trill, false, null),
      new Consonant(Place.Pharyngeal, Manner.Trill, true, null),
      new Consonant(Place.Glottal, Manner.Trill, false, null),
      new Consonant(Place.Glottal, Manner.Trill, true, null)
    ];

    this.lateralAffricates = [
      new Consonant(Place.Bilabial, Manner.Lateral_Affricate, false, null),
      new Consonant(Place.Bilabial, Manner.Lateral_Affricate, true, null),
      new Consonant(Place.Labiodental, Manner.Lateral_Affricate, false, null),
      new Consonant(Place.Labiodental, Manner.Lateral_Affricate, true, null),
      new Consonant(Place.Linguolabial, Manner.Lateral_Affricate, false, null),
      new Consonant(Place.Linguolabial, Manner.Lateral_Affricate, true, null),
      new Consonant(Place.Dental, Manner.Lateral_Affricate, false, null),
      new Consonant(Place.Dental, Manner.Lateral_Affricate, true, null),
      new Consonant(Place.Alveolar, Manner.Lateral_Affricate, false, null),
      new Consonant(Place.Alveolar, Manner.Lateral_Affricate, true, null),
      new Consonant(Place.Postalveolar, Manner.Lateral_Affricate, false, null),
      new Consonant(Place.Postalveolar, Manner.Lateral_Affricate, true, null),
      new Consonant(Place.Retroflex, Manner.Lateral_Affricate, false, null),
      new Consonant(Place.Retroflex, Manner.Lateral_Affricate, true, null),
      new Consonant(Place.Palatal, Manner.Lateral_Affricate, false, null),
      new Consonant(Place.Palatal, Manner.Lateral_Affricate, true, null),
      new Consonant(Place.Velar, Manner.Lateral_Affricate, false, null),
      new Consonant(Place.Velar, Manner.Lateral_Affricate, true, null),
      new Consonant(Place.Uvular, Manner.Lateral_Affricate, false, null),
      new Consonant(Place.Uvular, Manner.Lateral_Affricate, true, null),
      new Consonant(Place.Pharyngeal, Manner.Lateral_Affricate, false, null),
      new Consonant(Place.Pharyngeal, Manner.Lateral_Affricate, true, null),
      new Consonant(Place.Glottal, Manner.Lateral_Affricate, false, null),
      new Consonant(Place.Glottal, Manner.Lateral_Affricate, true, null)
    ];

    this.lateralFricatives = [
      new Consonant(Place.Bilabial, Manner.Lateral_Fricative, false, null),
      new Consonant(Place.Bilabial, Manner.Lateral_Fricative, true, null),
      new Consonant(Place.Labiodental, Manner.Lateral_Fricative, false, null),
      new Consonant(Place.Labiodental, Manner.Lateral_Fricative, true, null),
      new Consonant(Place.Linguolabial, Manner.Lateral_Fricative, false, null),
      new Consonant(Place.Linguolabial, Manner.Lateral_Fricative, true, null),
      new Consonant(Place.Dental, Manner.Lateral_Fricative, false, null),
      new Consonant(Place.Dental, Manner.Lateral_Fricative, true, null),
      new Consonant(Place.Alveolar, Manner.Lateral_Fricative, false, null),
      new Consonant(Place.Alveolar, Manner.Lateral_Fricative, true, null),
      new Consonant(Place.Postalveolar, Manner.Lateral_Fricative, false, null),
      new Consonant(Place.Postalveolar, Manner.Lateral_Fricative, true, null),
      new Consonant(Place.Retroflex, Manner.Lateral_Fricative, false, null),
      new Consonant(Place.Retroflex, Manner.Lateral_Fricative, true, null),
      new Consonant(Place.Palatal, Manner.Lateral_Fricative, false, null),
      new Consonant(Place.Palatal, Manner.Lateral_Fricative, true, null),
      new Consonant(Place.Velar, Manner.Lateral_Fricative, false, null),
      new Consonant(Place.Velar, Manner.Lateral_Fricative, true, null),
      new Consonant(Place.Uvular, Manner.Lateral_Fricative, false, null),
      new Consonant(Place.Uvular, Manner.Lateral_Fricative, true, null),
      new Consonant(Place.Pharyngeal, Manner.Lateral_Fricative, false, null),
      new Consonant(Place.Pharyngeal, Manner.Lateral_Fricative, true, null),
      new Consonant(Place.Glottal, Manner.Lateral_Fricative, false, null),
      new Consonant(Place.Glottal, Manner.Lateral_Fricative, true, null)
    ];

    this.lateralApproximants = [
      new Consonant(Place.Bilabial, Manner.Lateral_Approximant, false, null),
      new Consonant(Place.Bilabial, Manner.Lateral_Approximant, true, null),
      new Consonant(Place.Labiodental, Manner.Lateral_Approximant, false, null),
      new Consonant(Place.Labiodental, Manner.Lateral_Approximant, true, null),
      new Consonant(Place.Linguolabial, Manner.Lateral_Approximant, false, null),
      new Consonant(Place.Linguolabial, Manner.Lateral_Approximant, true, null),
      new Consonant(Place.Dental, Manner.Lateral_Approximant, false, null),
      new Consonant(Place.Dental, Manner.Lateral_Approximant, true, null),
      new Consonant(Place.Alveolar, Manner.Lateral_Approximant, false, null),
      new Consonant(Place.Alveolar, Manner.Lateral_Approximant, true, null),
      new Consonant(Place.Postalveolar, Manner.Lateral_Approximant, false, null),
      new Consonant(Place.Postalveolar, Manner.Lateral_Approximant, true, null),
      new Consonant(Place.Retroflex, Manner.Lateral_Approximant, false, null),
      new Consonant(Place.Retroflex, Manner.Lateral_Approximant, true, null),
      new Consonant(Place.Palatal, Manner.Lateral_Approximant, false, null),
      new Consonant(Place.Palatal, Manner.Lateral_Approximant, true, null),
      new Consonant(Place.Velar, Manner.Lateral_Approximant, false, null),
      new Consonant(Place.Velar, Manner.Lateral_Approximant, true, null),
      new Consonant(Place.Uvular, Manner.Lateral_Approximant, false, null),
      new Consonant(Place.Uvular, Manner.Lateral_Approximant, true, null),
      new Consonant(Place.Pharyngeal, Manner.Lateral_Approximant, false, null),
      new Consonant(Place.Pharyngeal, Manner.Lateral_Approximant, true, null),
      new Consonant(Place.Glottal, Manner.Lateral_Approximant, false, null),
      new Consonant(Place.Glottal, Manner.Lateral_Approximant, true, null)
    ];

    this.lateralTaps = [
      new Consonant(Place.Bilabial, Manner.Lateral_Tap, false, null),
      new Consonant(Place.Bilabial, Manner.Lateral_Tap, true, null),
      new Consonant(Place.Labiodental, Manner.Lateral_Tap, false, null),
      new Consonant(Place.Labiodental, Manner.Lateral_Tap, true, null),
      new Consonant(Place.Linguolabial, Manner.Lateral_Tap, false, null),
      new Consonant(Place.Linguolabial, Manner.Lateral_Tap, true, null),
      new Consonant(Place.Dental, Manner.Lateral_Tap, false, null),
      new Consonant(Place.Dental, Manner.Lateral_Tap, true, null),
      new Consonant(Place.Alveolar, Manner.Lateral_Tap, false, null),
      new Consonant(Place.Alveolar, Manner.Lateral_Tap, true, null),
      new Consonant(Place.Postalveolar, Manner.Lateral_Tap, false, null),
      new Consonant(Place.Postalveolar, Manner.Lateral_Tap, true, null),
      new Consonant(Place.Retroflex, Manner.Lateral_Tap, false, null),
      new Consonant(Place.Retroflex, Manner.Lateral_Tap, true, null),
      new Consonant(Place.Palatal, Manner.Lateral_Tap, false, null),
      new Consonant(Place.Palatal, Manner.Lateral_Tap, true, null),
      new Consonant(Place.Velar, Manner.Lateral_Tap, false, null),
      new Consonant(Place.Velar, Manner.Lateral_Tap, true, null),
      new Consonant(Place.Uvular, Manner.Lateral_Tap, false, null),
      new Consonant(Place.Uvular, Manner.Lateral_Tap, true, null),
      new Consonant(Place.Pharyngeal, Manner.Lateral_Tap, false, null),
      new Consonant(Place.Pharyngeal, Manner.Lateral_Tap, true, null),
      new Consonant(Place.Glottal, Manner.Lateral_Tap, false, null),
      new Consonant(Place.Glottal, Manner.Lateral_Tap, true, null)
    ];
  }
}
