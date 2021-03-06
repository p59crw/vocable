/*
 * Each letter grouping in the name of a constant represents a variable from
 * the type's class. So 'c_bil_n_v' would mean consonant_Bilabial_Nasal_Voiced
 * which represents the vowel 'm'. See the class folder to understand the
 * letiables used.
 */
export enum ConsonantUnicode {
  // Nasals
  c_bil_nas_u = '\u006d\u0325',
  c_bil_nas_v = '\u006d',
  c_lab_nas_u = '',
  c_lab_nas_v = '\u0271',
  c_lin_nas_u = '',
  c_lin_nas_v = '\u006e\u033c',
  c_den_nas_u = '',
  c_den_nas_v = '',
  c_alv_nas_u = '\u006e\u0325',
  c_alv_nas_v = '\u006e',
  c_pos_nas_u = '',
  c_pos_nas_v = '',
  c_ret_nas_u = '\u0273\u0325',
  c_ret_nas_v = '\u0273',
  c_pal_nas_u = '\u0272\u0325',
  c_pal_nas_v = '\u0272',
  c_vel_nas_u = '\u014b\u0325',
  c_vel_nas_v = '\u014b',
  c_uvu_nas_u = '',
  c_uvu_nas_v = '\u0274',
  c_pha_nas_u = 'null',
  c_pha_nas_v = 'null',
  c_glo_nas_u = 'null',
  c_glo_nas_v = 'null',
  // Stops
  c_bil_st_u = '\u0070',
  c_bil_st_v = '\u0062',
  c_lab_st_u = '\u0070\u032a',
  c_lab_st_v = '\u0062\u032a',
  c_lin_st_u = '\u0074\u033c',
  c_lin_st_v = '\u0064\u033c',
  c_den_st_u = '',
  c_den_st_v = '',
  c_alv_st_u = '\u0074',
  c_alv_st_v = '\u0064',
  c_pos_st_u = '',
  c_pos_st_v = '',
  c_ret_st_u = '\u0288',
  c_ret_st_v = '\u0256',
  c_pal_st_u = '\u0063',
  c_pal_st_v = '\u025f',
  c_vel_st_u = '\u006b',
  c_vel_st_v = '\u0261',
  c_uvu_st_u = '\u0071',
  c_uvu_st_v = '\u0262',
  c_pha_st_u = '\u02a1',
  c_pha_st_v = 'null',
  c_glo_st_u = '\u0294',
  c_glo_st_v = 'null',
  // Sibilant affricates
  c_bil_saff_u = 'null',
  c_bil_saff_v = 'null',
  c_lab_saff_u = 'null',
  c_lab_saff_v = 'null',
  c_lin_saff_u = 'null',
  c_lin_saff_v = 'null',
  c_den_saff_u = '',
  c_den_saff_v = '',
  c_alv_saff_u = '\u02a6',
  c_alv_saff_v = '\u02a3',
  c_pos_saff_u = '\u0074\u0361\u0283',
  c_pos_saff_v = '\u0064\u0361\u0292',
  c_ret_saff_u = '\u0288\u0361\u0282',
  c_ret_saff_v = '\u0256\u0361\u0290',
  c_pal_saff_u = '\u02a8',
  c_pal_saff_v = '\u02a5',
  c_vel_saff_u = 'null',
  c_vel_saff_v = 'null',
  c_uvu_saff_u = 'null',
  c_uvu_saff_v = 'null',
  c_pha_saff_u = 'null',
  c_pha_saff_v = 'null',
  c_glo_saff_u = 'null',
  c_glo_saff_v = 'null',
  // Non-Sibilant affricates
  c_bil_nonsaff_u = '\u0070\u0278',
  c_bil_nonsaff_v = '\u0062\u03b2',
  c_lab_nonsaff_u = '\u0070\u032a\u0066',
  c_lab_nonsaff_v = '\u0062\u032a\u0076',
  c_lin_nonsaff_u = '',
  c_lin_nonsaff_v = '',
  c_den_nonsaff_u = '\u0074\u032a\u03b8',
  c_den_nonsaff_v = '\u0064\u032a\u00f0',
  c_alv_nonsaff_u = '\u0074\u0279\u030a\u031d',
  c_alv_nonsaff_v = '\u0064\u0279\u031d',
  c_pos_nonsaff_u = '\u0074\u0279\u0332\u030a\u031d',
  c_pos_nonsaff_v = '\u0064\u0331\u0279\u0331\u031d',
  c_ret_nonsaff_u = '',
  c_ret_nonsaff_v = '',
  c_pal_nonsaff_u = '\u0063\u0361\u00E7',
  c_pal_nonsaff_v = '\u025f\u0361\u029d',
  c_vel_nonsaff_u = '\u006b\u0361\u0078',
  c_vel_nonsaff_v = '\u0261\u0361\u0263',
  c_uvu_nonsaff_u = '\u0071\u0361\u03c7',
  c_uvu_nonsaff_v = '',
  c_pha_nonsaff_u = '',
  c_pha_nonsaff_v = '\u02a1\u02a2',
  c_glo_nonsaff_u = '\u0294\u0068',
  c_glo_nonsaff_v = 'null',
  // Sibilant Fricatives
  c_bil_sfri_u = 'null',
  c_bil_sfri_v = 'null',
  c_lab_sfri_u = 'null',
  c_lab_sfri_v = 'null',
  c_lin_sfri_u = 'null',
  c_lin_sfri_v = 'null',
  c_den_sfri_u = '',
  c_den_sfri_v = '',
  c_alv_sfri_u = '\u0073',
  c_alv_sfri_v = '\u007a',
  c_pos_sfri_u = '\u0283',
  c_pos_sfri_v = '\u0292',
  c_ret_sfri_u = '\u0282',
  c_ret_sfri_v = '\u0290',
  c_pal_sfri_u = '\u0255',
  c_pal_sfri_v = '\u0291',
  c_vel_sfri_u = 'null',
  c_vel_sfri_v = 'null',
  c_uvu_sfri_u = 'null',
  c_uvu_sfri_v = 'null',
  c_pha_sfri_u = 'null',
  c_pha_sfri_v = 'null',
  c_glo_sfri_u = 'null',
  c_glo_sfri_v = 'null',
  // Non-Sibilant Fricatives
  c_bil_nonsfri_u = '\u0278',
  c_bil_nonsfri_v = '\u03b2',
  c_lab_nonsfri_u = '\u0066',
  c_lab_nonsfri_v = '\u0076',
  c_lin_nonsfri_u = '\u03b8\u033c',
  c_lin_nonsfri_v = '\u00f0\u033c',
  c_den_nonsfri_u = '\u03b8',
  c_den_nonsfri_v = '\u00f0',
  c_alv_nonsfri_u = '\u03b8\u0331',
  c_alv_nonsfri_v = '\u00f0\u0331',
  c_pos_nonsfri_u = '\u0279\u0331\u030a\u031d',
  c_pos_nonsfri_v = '\u0279\u0331\u031d',
  c_ret_nonsfri_u = '',
  c_ret_nonsfri_v = '\u027b\u031d',
  c_pal_nonsfri_u = '\u00e7',
  c_pal_nonsfri_v = '\u029d',
  c_vel_nonsfri_u = '\u0078',
  c_vel_nonsfri_v = '\u0263',
  c_uvu_nonsfri_u = '\u03c7',
  c_uvu_nonsfri_v = '\u0281',
  c_pha_nonsfri_u = '\u0127',
  c_pha_nonsfri_v = '\u0295',
  c_glo_nonsfri_u = '\u0068',
  c_glo_nonsfri_v = '\u0266',
  // Approximants
  c_bil_app_u = '',
  c_bil_app_v = '',
  c_lab_app_u = '\u028b\u0325',
  c_lab_app_v = '\u028b',
  c_lin_app_u = '',
  c_lin_app_v = '',
  c_den_app_u = '',
  c_den_app_v = '',
  c_alv_app_u = '\u0279\u0325',
  c_alv_app_v = '\u0279',
  c_pos_app_u = '',
  c_pos_app_v = '',
  c_ret_app_u = '\u027b\u030a',
  c_ret_app_v = '\u027b',
  c_pal_app_u = '\u006a\u030a',
  c_pal_app_v = '\u006a',
  c_vel_app_u = '\u0270\u030a',
  c_vel_app_v = '\u0270',
  c_uvu_app_u = '',
  c_uvu_app_v = '',
  c_pha_app_u = '',
  c_pha_app_v = '',
  c_glo_app_u = '',
  c_glo_app_v = '\u0294\u031e',
  // Taps
  c_bil_tap_u = '\u2c71\u031f',
  c_bil_tap_v = '',
  c_lab_tap_u = '\u2c71',
  c_lab_tap_v = '',
  c_lin_tap_u = '\u027e\u033c',
  c_lin_tap_v = '',
  c_den_tap_u = '',
  c_den_tap_v = '',
  c_alv_tap_u = '\u027e\u0325',
  c_alv_tap_v = '\u027e',
  c_pos_tap_u = '',
  c_pos_tap_v = '',
  c_ret_tap_u = '\u027d\u030a',
  c_ret_tap_v = '\u027d',
  c_pal_tap_u = 'null',
  c_pal_tap_v = 'null',
  c_vel_tap_u = 'null',
  c_vel_tap_v = 'null',
  c_uvu_tap_u = '',
  c_uvu_tap_v = '\u0262\u0306',
  c_pha_tap_u = '',
  c_pha_tap_v = '\u02a1\u0306',
  c_glo_tap_u = 'null',
  c_glo_tap_v = 'null',
  // Trills
  c_bil_tri_u = '\u0299\u0325',
  c_bil_tri_v = '\u0299',
  c_lab_tri_u = '',
  c_lab_tri_v = '',
  c_lin_tri_u = '',
  c_lin_tri_v = '',
  c_den_tri_u = '',
  c_den_tri_v = '',
  c_alv_tri_u = '\u0072\u0325',
  c_alv_tri_v = '\u0072',
  c_pos_tri_u = '',
  c_pos_tri_v = '',
  c_ret_tri_u = '\u027d\u0361\u0072\u0325',
  c_ret_tri_v = '\u027d\u0361\u0072',
  c_pal_tri_u = '',
  c_pal_tri_v = '',
  c_vel_tri_u = 'null',
  c_vel_tri_v = 'null',
  c_uvu_tri_u = '\u0280\u0325',
  c_uvu_tri_v = '\u0280',
  c_pha_tri_u = '\u029c',
  c_pha_tri_v = '\u02a2',
  c_glo_tri_u = 'null',
  c_glo_tri_v = 'null',
  // Lateral affricates
  c_bil_lataff_u = 'null',
  c_bil_lataff_v = 'null',
  c_lab_lataff_u = 'null',
  c_lab_lataff_v = 'null',
  c_lin_lataff_u = '',
  c_lin_lataff_v = '',
  c_den_lataff_u = '',
  c_den_lataff_v = '',
  c_alv_lataff_u = '\u0074\u0361\u026c',
  c_alv_lataff_v = '\u0064\u0361\u026e',
  c_pos_lataff_u = '',
  c_pos_lataff_v = '',
  c_ret_lataff_u = '\u0074\u026d\u030a\u031d',
  c_ret_lataff_v = '',
  c_pal_lataff_u = '\u0063\u028e\u030a\u031d',
  c_pal_lataff_v = '',
  c_vel_lataff_u = '\u006b\u029f\u030a\u031d',
  c_vel_lataff_v = '\u0261\u029f\u031d',
  c_uvu_lataff_u = '',
  c_uvu_lataff_v = '',
  c_pha_lataff_u = 'null',
  c_pha_lataff_v = 'null',
  c_glo_lataff_u = 'null',
  c_glo_lataff_v = 'null',
  // Lateral Fricatives
  c_bil_latfri_u = 'null',
  c_bil_latfri_v = 'null',
  c_lab_latfri_u = 'null',
  c_lab_latfri_v = 'null',
  c_lin_latfri_u = '',
  c_lin_latfri_v = '',
  c_den_latfri_u = '',
  c_den_latfri_v = '',
  c_alv_latfri_u = '\u026c',
  c_alv_latfri_v = '\u026e',
  c_pos_latfri_u = '',
  c_pos_latfri_v = '',
  c_ret_latfri_u = '\u026d\u030a\u031d',
  c_ret_latfri_v = '\u026d\u031d',
  c_pal_latfri_u = '\u028e\u030a\u031d',
  c_pal_latfri_v = '\u028e\u031d',
  c_vel_latfri_u = '\u029f\u030a\u031d',
  c_vel_latfri_v = '\u029f\u031d',
  c_uvu_latfri_u = '',
  c_uvu_latfri_v = '',
  c_pha_latfri_u = 'null',
  c_pha_latfri_v = 'null',
  c_glo_latfri_u = 'null',
  c_glo_latfri_v = 'null',
  // Lateral approximants
  c_bil_latapp_u = 'null',
  c_bil_latapp_v = 'null',
  c_lab_latapp_u = 'null',
  c_lab_latapp_v = 'null',
  c_lin_latapp_u = '',
  c_lin_latapp_v = '',
  c_den_latapp_u = '',
  c_den_latapp_v = '',
  c_alv_latapp_u = '\u006c\u0325',
  c_alv_latapp_v = '\u006c',
  c_pos_latapp_u = '',
  c_pos_latapp_v = '',
  c_ret_latapp_u = '\u026d\u030a',
  c_ret_latapp_v = '\u026d',
  c_pal_latapp_u = '\u028e\u0325',
  c_pal_latapp_v = '\u028e',
  c_vel_latapp_u = '\u029f\u0325',
  c_vel_latapp_v = '\u029f',
  c_uvu_latapp_u = '',
  c_uvu_latapp_v = '\u029f\u0331',
  c_pha_latapp_u = 'null',
  c_pha_latapp_v = 'null',
  c_glo_latapp_u = 'null',
  c_glo_latapp_v = 'null',
  // Lateral Taps
  c_bil_lattap_u = 'null',
  c_bil_lattap_v = 'null',
  c_lab_lattap_u = 'null',
  c_lab_lattap_v = 'null',
  c_lin_lattap_u = '',
  c_lin_lattap_v = '',
  c_den_lattap_u = '',
  c_den_lattap_v = '',
  c_alv_lattap_u = '',
  c_alv_lattap_v = '\u027a',
  c_pos_lattap_u = '',
  c_pos_lattap_v = '',
  c_ret_lattap_u = '',
  c_ret_lattap_v = '\u026d\u0306',
  c_pal_lattap_u = '',
  c_pal_lattap_v = '\u028e\u0306',
  c_vel_lattap_u = '',
  c_vel_lattap_v = '\u029f\u0306',
  c_uvu_lattap_u = '',
  c_uvu_lattap_v = '',
  c_pha_lattap_u = 'null',
  c_pha_lattap_v = 'null',
  c_glo_lattap_u = 'null',
  c_glo_lattap_v = 'null',
  // NonPulmonic consonants
  // Ejectives
  // Stops
  c_bil_ejec_stop_u = '\u0070\u02bc',
  c_bil_ejec_stop_v = 'null',
  c_lab_ejec_stop_u = '',
  c_lab_ejec_stop_v = 'null',
  c_lin_ejec_stop_u = '',
  c_lin_ejec_stop_v = 'null',
  c_den_ejec_stop_u = '',
  c_den_ejec_stop_v = 'null',
  c_alv_ejec_stop_u = '\u0074\u02bc',
  c_alv_ejec_stop_v = 'null',
  c_pos_ejec_stop_u = '',
  c_pos_ejec_stop_v = 'null',
  c_ret_ejec_stop_u = '\u0288\u02bc',
  c_ret_ejec_stop_v = 'null',
  c_pal_ejec_stop_u = '\u0063\u02bc',
  c_pal_ejec_stop_v = 'null',
  c_vel_ejec_stop_u = '\u006B\u02bc',
  c_vel_ejec_stop_v = 'null',
  c_uvu_ejec_stop_u = '\u0071\u02bc',
  c_uvu_ejec_stop_v = 'null',
  c_pha_ejec_stop_u = '\u02a1\u02bc',
  c_pha_ejec_stop_v = 'null',
  c_glo_ejec_stop_u = 'null',
  c_glo_ejec_stop_v = 'null',
  // affricate
  c_bil_ejec_aff_u = '',
  c_bil_ejec_aff_v = 'null',
  c_lab_ejec_aff_u = '',
  c_lab_ejec_aff_v = 'null',
  c_lin_ejec_aff_u = 'null',
  c_lin_ejec_aff_v = 'null',
  c_den_ejec_aff_u = '\u0074\u032a\u03b8\u02bc',
  c_den_ejec_aff_v = 'null',
  c_alv_ejec_aff_u = '\u0074\u0073\u02bc',
  c_alv_ejec_aff_v = 'null',
  c_pos_ejec_aff_u = '\u0074\u0361\u0283\u02bc',
  c_pos_ejec_aff_v = 'null',
  c_ret_ejec_aff_u = '\u0074\u0282\u02bc',
  c_ret_ejec_aff_v = 'null',
  c_pal_ejec_aff_u = '',
  c_pal_ejec_aff_v = 'null',
  c_vel_ejec_aff_u = '\u006B\u0078\u02bc',
  c_vel_ejec_aff_v = 'null',
  c_uvu_ejec_aff_u = '\u0071\u0078\u02bc',
  c_uvu_ejec_aff_v = 'null',
  c_pha_ejec_aff_u = '',
  c_pha_ejec_aff_v = 'null',
  c_glo_ejec_aff_u = 'null',
  c_glo_ejec_aff_v = 'null',
  // Fricative
  c_bil_ejec_fri_u = '\u0278\u02bc',
  c_bil_ejec_fri_v = 'null',
  c_lab_ejec_fri_u = '\u0066\u02bc',
  c_lab_ejec_fri_v = 'null',
  c_lin_ejec_fri_u = 'null',
  c_lin_ejec_fri_v = 'null',
  c_den_ejec_fri_u = '\u03B8\u02bc',
  c_den_ejec_fri_v = 'null',
  c_alv_ejec_fri_u = '\u0073\u02bc',
  c_alv_ejec_fri_v = 'null',
  c_pos_ejec_fri_u = '\u0283\u02bc',
  c_pos_ejec_fri_v = 'null',
  c_ret_ejec_fri_u = '\u0282\u02bc',
  c_ret_ejec_fri_v = 'null',
  c_pal_ejec_fri_u = '\u0255\u02bc',
  c_pal_ejec_fri_v = 'null',
  c_vel_ejec_fri_u = '\u0078\u02bc',
  c_vel_ejec_fri_v = 'null',
  c_uvu_ejec_fri_u = '\u03c7\u02bc',
  c_uvu_ejec_fri_v = 'null',
  c_pha_ejec_fri_u = '',
  c_pha_ejec_fri_v = 'null',
  c_glo_ejec_fri_u = 'null',
  c_glo_ejec_fri_v = 'null',
  // Lateral affricate
  c_bil_ejec_lat_aff_u = '',
  c_bil_ejec_lat_aff_v = 'null',
  c_lab_ejec_lat_aff_u = '',
  c_lab_ejec_lat_aff_v = 'null',
  c_lin_ejec_lat_aff_u = 'null',
  c_lin_ejec_lat_aff_v = 'null',
  c_den_ejec_lat_aff_u = '',
  c_den_ejec_lat_aff_v = 'null',
  c_alv_ejec_lat_aff_u = '\u0074\u0361\u026c\u02bc',
  c_alv_ejec_lat_aff_v = 'null',
  c_pos_ejec_lat_aff_u = '',
  c_pos_ejec_lat_aff_v = 'null',
  c_ret_ejec_lat_aff_u = '',
  c_ret_ejec_lat_aff_v = 'null',
  c_pal_ejec_lat_aff_u = '\u0063\u028e\u030a\u031d\u02bc',
  c_pal_ejec_lat_aff_v = 'null',
  c_vel_ejec_lat_aff_u = '\u006b\u029f\u030a\u031d\u02bc',
  c_vel_ejec_lat_aff_v = 'null',
  c_uvu_ejec_lat_aff_u = '',
  c_uvu_ejec_lat_aff_v = 'null',
  c_pha_ejec_lat_aff_u = '',
  c_pha_ejec_lat_aff_v = 'null',
  c_glo_ejec_lat_aff_u = 'null',
  c_glo_ejec_lat_aff_v = 'null',
  // Lateral Fricative
  c_bil_ejec_lat_fri_u = '',
  c_bil_ejec_lat_fri_v = 'null',
  c_lab_ejec_lat_fri_u = '',
  c_lab_ejec_lat_fri_v = 'null',
  c_lin_ejec_lat_fri_u = 'null',
  c_lin_ejec_lat_fri_v = 'null',
  c_den_ejec_lat_fri_u = '',
  c_den_ejec_lat_fri_v = 'null',
  c_alv_ejec_lat_fri_u = '\u026c\u02bc',
  c_alv_ejec_lat_fri_v = 'null',
  c_pos_ejec_lat_fri_u = '',
  c_pos_ejec_lat_fri_v = 'null',
  c_ret_ejec_lat_fri_u = '',
  c_ret_ejec_lat_fri_v = 'null',
  c_pal_ejec_lat_fri_u = '',
  c_pal_ejec_lat_fri_v = 'null',
  c_vel_ejec_lat_fri_u = '',
  c_vel_ejec_lat_fri_v = 'null',
  c_uvu_ejec_lat_fri_u = '',
  c_uvu_ejec_lat_fri_v = 'null',
  c_pha_ejec_lat_fri_u = '',
  c_pha_ejec_lat_fri_v = 'null',
  c_glo_ejec_lat_fri_u = 'null',
  c_glo_ejec_lat_fri_v = 'null',
  // Clicks
  // Tenuis
  c_bil_clic_ten_u = '\u0298',
  c_bil_clic_ten_v = '\u0298\u032c',
  c_lab_clic_ten_u = '',
  c_lab_clic_ten_v = '',
  c_lin_clic_ten_u = '',
  c_lin_clic_ten_v = '',
  c_den_clic_ten_u = '\u0287',
  c_den_clic_ten_v = '\u0287\u032c',
  c_alv_clic_ten_u = '\u01c3',
  c_alv_clic_ten_v = '\u01c3\u032c',
  c_pos_clic_ten_u = '',
  c_pos_clic_ten_v = '',
  c_ret_clic_ten_u = '\u01c3\u02de',
  c_ret_clic_ten_v = '\u01c3\u02de\u032c',
  c_pal_clic_ten_u = '\u01c2',
  c_pal_clic_ten_v = '\u01c2\u032c',
  c_vel_clic_ten_u = '\u029e',
  c_vel_clic_ten_v = 'null',
  c_uvu_clic_ten_u = 'null',
  c_uvu_clic_ten_v = 'null',
  c_pha_clic_ten_u = 'null',
  c_pha_clic_ten_v = 'null',
  c_glo_clic_ten_u = 'null',
  c_glo_clic_ten_v = 'null',
  // Nasal
  c_bil_clic_nas_u = '',
  c_bil_clic_nas_v = '\u0298\u0303',
  c_lab_clic_nas_u = '',
  c_lab_clic_nas_v = '',
  c_lin_clic_nas_u = '',
  c_lin_clic_nas_v = '',
  c_den_clic_nas_u = '',
  c_den_clic_nas_v = '\u0287\u0303',
  c_alv_clic_nas_u = '',
  c_alv_clic_nas_v = '\u01c3\u0303',
  c_pos_clic_nas_u = '',
  c_pos_clic_nas_v = '',
  c_ret_clic_nas_u = '',
  c_ret_clic_nas_v = '\u01c3\u02de\u0303',
  c_pal_clic_nas_u = '',
  c_pal_clic_nas_v = '\u01c2\u0303',
  c_vel_clic_nas_u = 'null',
  c_vel_clic_nas_v = 'null',
  c_uvu_clic_nas_u = 'null',
  c_uvu_clic_nas_v = 'null',
  c_pha_clic_nas_u = 'null',
  c_pha_clic_nas_v = 'null',
  c_glo_clic_nas_u = 'null',
  c_glo_clic_nas_v = 'null',
  // Lateral
  c_bil_clic_lat_u = 'null',
  c_bil_clic_lat_v = 'null',
  c_lab_clic_lat_u = 'null',
  c_lab_clic_lat_v = 'null',
  c_lin_clic_lat_u = '',
  c_lin_clic_lat_v = '',
  c_den_clic_lat_u = '',
  c_den_clic_lat_v = '',
  c_alv_clic_lat_u = '\u01c1',
  c_alv_clic_lat_v = '\u01c1\u032c',
  c_pos_clic_lat_u = '',
  c_pos_clic_lat_v = '',
  c_ret_clic_lat_u = '',
  c_ret_clic_lat_v = '',
  c_pal_clic_lat_u = '',
  c_pal_clic_lat_v = '',
  c_vel_clic_lat_u = 'null',
  c_vel_clic_lat_v = 'null',
  c_uvu_clic_lat_u = 'null',
  c_uvu_clic_lat_v = 'null',
  c_pha_clic_lat_u = 'null',
  c_pha_clic_lat_v = 'null',
  c_glo_clic_lat_u = 'null',
  c_glo_clic_lat_v = 'null',
  // Lateral Nasal
  c_bil_clic_lat_nas_u = 'null',
  c_bil_clic_lat_nas_v = 'null',
  c_lab_clic_lat_nas_u = 'null',
  c_lab_clic_lat_nas_v = 'null',
  c_lin_clic_lat_nas_u = '',
  c_lin_clic_lat_nas_v = '',
  c_den_clic_lat_nas_u = '',
  c_den_clic_lat_nas_v = '',
  c_alv_clic_lat_nas_u = '',
  c_alv_clic_lat_nas_v = '\u01c1\u0303',
  c_pos_clic_lat_nas_u = '',
  c_pos_clic_lat_nas_v = '',
  c_ret_clic_lat_nas_u = '',
  c_ret_clic_lat_nas_v = '',
  c_pal_clic_lat_nas_u = '',
  c_pal_clic_lat_nas_v = '',
  c_vel_clic_lat_nas_u = 'null',
  c_vel_clic_lat_nas_v = 'null',
  c_uvu_clic_lat_nas_u = 'null',
  c_uvu_clic_lat_nas_v = 'null',
  c_pha_clic_lat_nas_u = 'null',
  c_pha_clic_lat_nas_v = 'null',
  c_glo_clic_lat_nas_u = 'null',
  c_glo_clic_lat_nas_v = 'null',
  // Implosives
  c_bil_implos_u = '\u0253\u0325',
  c_bil_implos_v = '\u0253',
  c_lab_implos_u = '',
  c_lab_implos_v = '',
  c_lin_implos_u = '',
  c_lin_implos_v = '',
  c_den_implos_u = '',
  c_den_implos_v = '',
  c_alv_implos_u = '\u0257\u0325',
  c_alv_implos_v = '\u0257',
  c_pos_implos_u = '',
  c_pos_implos_v = '',
  c_ret_implos_u = '\u1d91\u0325',
  c_ret_implos_v = '\u1d91',
  c_pal_implos_u = '\u0284\u030a',
  c_pal_implos_v = '\u0284',
  c_vel_implos_u = '\u0260\u030a',
  c_vel_implos_v = '\u0260',
  c_uvu_implos_u = '\u029b\u0325',
  c_uvu_implos_v = '\u029b',
  c_pha_implos_u = '',
  c_pha_implos_v = '',
  c_glo_implos_u = '',
  c_glo_implos_v = ''
}
