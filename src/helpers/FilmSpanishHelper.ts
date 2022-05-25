
export const filmMappingSpanish = (item,lang) => {

    if (lang === 'en') return item

    const {created:creado,edited : editado,episode_id : episodio_id,opening_crawl: rastreo_apertura,producer : productor,
        release_date: fecha_lanzamiento,title:titulo,characters:actores,planets:planetas,starships:naves_espaciales,
        vehicles:vehiculos,species: especies,...rest} = item

    return {creado, editado, episodio_id, rastreo_apertura, productor, fecha_lanzamiento, titulo,
        actores, planetas, naves_espaciales, vehiculos, especies,...rest}
    }

export const peopleMappingSpanish = (item,lang) => {

    if (lang === 'en') return item

    const {name:nombre,height:altura,mass:masa,hair_color:color_cabello,skin_color:color_piel,eye_color:color_ojo,birth_year:anio_nacimiento,
        gender: genero, homeworld : mundo_natal,films: peliculas,species: especies,
        vehicles:vehiculos,starships:naves_espaciales,created:creado,edited : editado,...rest} = item

    return {nombre,altura,masa,color_cabello,color_piel,color_ojo,anio_nacimiento,genero,mundo_natal,peliculas,especies,
        editado,creado, naves_espaciales, vehiculos ,...rest}
}

    export const paginationSpanish = (item,lang,items) => {
        if (lang === 'en') return Object.assign(item,{results: items})
        const { count:total ,next: siguiente,previous: anterior} = item
        return {total,siguiente,anterior,resultados: items}
    }

