class productBikers{
    constructor(id,name,img,type,wheels,brand,frame,size,brake,vel,color,des,price,amount){
    this.id = id;
    this.name = name;
    this.img = img;
    this.type = type;
    this.wheels = wheels;
    this.brand = brand;
    this.frame = frame;
    this.size = size;
    this.brake = brake;
    this.vel = vel;
    this.color = color;
    this.des = des;
    this.price = price;
    this.amount = price;
    }

}

export const bikers =[
    new productBikers(1,"Raleigh 700C Classic Nexus","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949582/raleight_700c_ddjnlz.jpg","Urbana",28,"raleigh","Aluminio","S","V-brake",3,"Negro",
    "Bicicleta de paseo estilo vintage, liviana de aluminio con componentes modernos, al tener ruedas finas se convierte en una bicicleta ideal para paseos urbanos.",150000),
    
    new productBikers(16,"Trek Urbana Verve R700","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949582/Trek_Urbana_Verve_R700_x0ryee.jpg","Urbana",27.5,"Trek","Aluminio","S","Disco 160mm Mecanico",21,"Blanco",
    "Bicicleta de paseo, liviana de aluminio con componentes shimano, es una bicicleta ideal para paseos urbanos, uso diario y entrenamiento deportivo.",335000),
    
    new productBikers(17,"Olmo Primavera 265","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949581/Olmo_Primavera_265_lvxmvj.jpg","Urbana",26,"Olmo","Acero","S","V-brake","No","Azul",
    "Bicicleta de paseo vintage, al tener cuadro de aluminio y ruedas fina se convierte en una bicicleta muy comoda y liviana para paseos urbanos y uso diario.",99000),
    
    new productBikers(18,"Aurora Mondo","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949580/Aurora_Mondo_b8jehq.jpg","Urbana",28,"Aurora","Aluminio","M","V-brake",6,"Negro",
    "Bicicleta de paseo, es una bicicleta muy comoda para paseos urbanos y uso diario, con una estetica muy atractiva.",85000),
    
    new productBikers(2,"Fire Bird Speed 2X9","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949580/FIRE_BIRD_SPEED_2X9_htlk7m.png","ruta",28,"fire bird","Aluminio","S","Herradura C-star",18,"Negro y Naranja",
    "Bicicleta de ruta moderna, muy liviana con cuadro de aluminio, perfecta para iniciar en el mundo de la competición.",160000),
    
    new productBikers(3,"Raleigh Strada 1.0","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949582/RALEIGH_STRADA_1.0_enhgae.jpg","ruta",28,"raleigh","Aluminio","S","Herradura C-star",16,"Rojo",
    "Bicicleta de ruta moderna, muy liviana con cuadro de aluminio, perfecta para el mundo de la competición..",320000),
    
    new productBikers(4,"Poligon Stratos S7","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949581/POLYGON_STRATTOS_S7_vldapu.jpg","ruta",28,"poligon","Carbono","M","Disco 180mm Hidraulico",22,"Rojo y Negro",
    "Bicicleta de ruta moderna, extra liviana con cuadro de carbono, perfecta para competir de manera profesional",1150000),
    
    new productBikers(5,"Fire Bird HE- 2021 Dama","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949580/FIRE_BIRD_HE-_2021_DAMA_rthdm9.jpg","MTB",26,"fire bird","Aluminio","S","V-Brake",21,"Negro y Rosa",
    "Bicicleta MTB de dama, posee cuadro de aluminio, lo que la hace ideal para uso diario y deportivo.",90000),
    
    new productBikers(6,"Zenith Atacama","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949582/ZENITH_ATACAMA_mrceyf.jpg","MTB",26,"zenith","Aluminio","L","Disco 160mm Mecanico",8,"Negro y Rojo",
    "Bicicleta MTB rodado 26, es muy liviana al tener cuadro de aluminio, posee componentes Shimano lo que la convierte en una bicicleta ideal tanto para uso deportivo urbano como para uso rural o de montaña.",130000),
    
    new productBikers(7,"Battle 27,5","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949579/Battle_27_5_lylrec.jpg","MTB",27.5,"Battle","Aluminio","L","Disco 160mm Mecanico",24,"Azul",
    "Bicicleta MTB rodado 27,5 , posee componentes shimano, lo que la combierte en una bicicleta liviana, comoda y duradera, es ideal para entrenar en ruta y en ruralidad.",119000),
    
    new productBikers(8,"Fire Bird Vanguard","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949580/Fire_Bird_Vanguard_ciga5j.jpg","MTB",27.5,"Fire Bird","Aluminio","S","Disco 160mm Mecanico",21,"Rojo",
    "Bicicleta MTB rodado 27,5 , posee componentes shimano, lo que la combierte en una bicicleta liviana, comoda y duradera, es ideal para entrenar en ruta y en ruralidad.",130000),
    
    new productBikers(9,"Raleigh Mojave 2.0","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949581/Raleigh_Mojave_2.0_hmdzid.jpg","MTB",27.5,"Raleigh","Aluminio","S","Disco 160mm Mecanico",21,"Negro y Rosa",
    "Bicicleta MTB rodado 27,5 de dama , posee componentes shimano, lo que la combierte en una bicicleta liviana, comoda y duradera, es ideal para entrenar en ruta y en ruralidad.",133000),
    
    new productBikers(10,"KTM Myroon SE3","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949580/KTM_MYROON_SE3_i87piu.jpg","MTB",29,"Ktm","Carbono","M","Disco 180mm Hidraulico",21,"Naranja",
    "Bicicleta MTB rodado 29 , posee componentes shimano, lo que la combierte en una bicicleta liviana, comoda y duradera, es ideal para entrenar en ruta y en ruralidad y competencias deportivas.",133000),
    
    new productBikers(11,"Raleigh Mojave 7.0","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949582/Raleigh_Mojave_7.0_fijnj5.jpg","MTB",29,"Raleigh","Aluminio","M","Disco 180mm Hidraulico",12,"Rojo",
    "Bicicleta MTB rodado 29 , posee componentes shimano, lo que la combierte en una bicicleta liviana, comoda y duradera, es ideal para entrenar en ruta y en ruralidad y competencias deportivas.",405000),
    
    new productBikers(12,"Vairo XR 4.0","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949582/Vairo_XR_4.0_byda74.jpg","MTB",29,"Vairo","Aluminio","L","Disco 180mm",21,"Gris",
    "Bicicleta MTB rodado 29 , posee componentes shimano, lo que la combierte en una bicicleta liviana, comoda y duradera, es ideal para entrenar en ruta y en ruralidad.",130000),
    
    new productBikers(13,"Raleigh Mojave 2.0 R29","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949581/Raleigh_Mojave_2.0_R29_vvm1gs.jpg","MTB",29,"Raleigh","Aluminio","M","Disco 180mm Mecanico",21,"Negro y Rojo",
    "Bicicleta MTB rodado 29 , posee componentes shimano, lo que la combierte en una bicicleta liviana, comoda y duradera, es ideal para entrenar en ruta y en ruralidad.",140000),
    
    new productBikers(14,"Venzo Frida Diva","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949582/Venzo_Frida_Diva_j2uiak.jpg","MTB",29,"venzo","Aluminio","M","Disco 180mm Hidraulico",24,"Negro y Rosa",
    "Bicicleta MTB rodado 29 , posee componentes shimano, lo que la combierte en una bicicleta liviana, comoda y duradera, es ideal para entrenar en ruta y en ruralidad.",160000),
    
    new productBikers(15,"Raleigh Mojave 4.0","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949582/Raleigh_Mojave_4.0_b37sbd.jpg","MTB",29,"Raleigh","Aluminio","S","Disco 180mm Hidraulico",24,"Negro y Rojo",
    "Bicicleta MTB rodado 29 , posee componentes shimano, lo que la combierte en una bicicleta liviana, comoda y duradera, es ideal para entrenar en ruta y en ruralidad y competencias deportivas.",230000),
    
    new productBikers(19,"Shifter Doble Suspensiónn","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949582/Shifter_Doble_Suspensi%C3%B3nn_masshe.jpg","MTB",26,"Shifter","Acero","M","Disco 160mm Mecanico",21,"Negro y Rojo",
    "Bicicleta de descenso, al tener doble suspencion y freno a disco, es ideal para comenzar en el mundo del montañismo.",60000),
    
    new productBikers(20,"Porta Equipaje","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949580/porta_equipaje_fy50rl.jpg","accesorios",29,"fire bird","Aluminio","Xs - Xl","-","-","Negro",
    "Porta Equipaje de aluminio para bicicletas de R24-R29, soporta hasta 25kg gracias a su doble anclaje.",10000),
    
    new productBikers(21,"Porta Equipaje Flotante","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949581/Porta_equipaje_flotante_ardoso.jpg","accesorios",29,"#N/A","Aluminio","Xs - Xl","-","-","Negro",
    "Porta Equipaje de aluminio para bicicletas de R24-R29, soporta hasta 10kg, anclaje simple y estetico al asiento.",7000),
    
    new productBikers(22,"Asiento Prostatico","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949580/Asiento_Prostatico_qobf9h.jpg","accesorios",29,"Dakota","Gel","M","-","-","Negro y Amarillo",
    "Asiento anti Prostatico de gel, muy comodo, ideal para uso diario.",3000),
    
    new productBikers(23,"Asiento Prostatico","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949580/Asiento_Anti-prostatico_nmavrk.jpg","accesorios",29,"Dakota","Gel","M","-","-","Negro y Azul",
    "Asiento anti Prostatico de gel, muy comodo, ideal para uso diario.",4500),
    
    new productBikers(24,"Kit Luces","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949580/Kit_luces_cvuhiw.jpg","accesorios",29,"Dakota","Led","-","-","-","Negro y Rojo",
    "Kit de luces led recargable, luz led delantera de 300 lúmenes blanca + trasera de 15 lúmenes roja.",3200),
    
    new productBikers(25,"Casco Mtb","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949580/Casco_xnzzmf.jpg","accesorios",29,"Giant","Policarbonato","M","-","-","Negro",
    "Casco Giant para Mtb con regulación y ventilación, muy comodo y liviano.",21900),
    
    new productBikers(26,"Luz trasera","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949580/Luz_trasera_tu1awu.jpg","accesorios",29,"2M Sports","pvc","M","-","-","Rojo",
    "Luz trasera color roja de 100 lúmenes, recargable con sensor de freno.",3500),
    
    new productBikers(27,"Luz delantera recargable","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949580/Luz_recargable_delantera_cnto6p.jpg","accesorios",29,"Gadnic","Aluminio","M","-","-","Negro",
    "Luz delantera led blanca de 400 lúmenes recargable.",11100),
    
    new productBikers(28,"Kit Freno V Brake","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949580/Freno_V_Brake_rt342r.jpg","accesorios",26,"Top Mega","Aluminio","-","V-Brake","-","Negro",
    "Kit de freno V-Brake con manijas de aluminio, pastillas y cables.",1800),
    
    new productBikers(29,"Kit freno hidraulico","https://res.cloudinary.com/dyarz6hqx/image/upload/v1684949580/Kit_freno_hidraulico_fn2ogg.jpg","accesorios",29,"Top Mega","Aluminio","-","Disco 180mm Hidraulico","-","Negro",
    "Kit de freno Hidraulico con manijas de aluminio,incluye calipers con pastillas, manijas de freno, caños y discos de 180mm.",12700),
]

export const totalProducts = bikers.length;