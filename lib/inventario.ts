/**
 * Cuántas propiedades tenemos publicadas, derivado en vez de escrito a mano.
 *
 * La portada anunciaba un número fijo en el código. En julio decía 28, se
 * corrigió a mano a 27, y un mes después la base ya iba en 25: volvió a mentir
 * sola. Auditoría web 2026-07-18 y regla del proyecto de derivar, no escribir a
 * mano los conteos.
 *
 * La cuenta sale del mapa del sitio de book.marimbashome.com, que es público y
 * se genera del mismo inventario que la base. Así este sitio no necesita llave
 * de base de datos ni una dependencia nueva para decir la verdad.
 *
 * Si la consulta falla, se devuelve el último valor conocido en vez de romper la
 * portada o enseñar un hueco. Con `revalidate` la página se rehace cada 6 horas.
 */

const MAPA_DEL_SITIO = 'https://book.marimbashome.com/sitemap.xml';

/** Último valor verificado contra la base (2026-08-18). Solo se usa si la consulta falla. */
export const PROPIEDADES_RESPALDO = 25;

export async function contarPropiedades(): Promise<number> {
  try {
    const res = await fetch(MAPA_DEL_SITIO, { next: { revalidate: 21600 } });
    if (!res.ok) return PROPIEDADES_RESPALDO;
    const xml = await res.text();
    const encontradas = xml.match(/book\.marimbashome\.com\/es\/property\/[a-z0-9-]+/g) ?? [];
    const unicas = new Set(encontradas);
    // Un mapa del sitio vacío o a medias no debe borrar el número de la portada.
    return unicas.size > 0 ? unicas.size : PROPIEDADES_RESPALDO;
  } catch {
    return PROPIEDADES_RESPALDO;
  }
}
