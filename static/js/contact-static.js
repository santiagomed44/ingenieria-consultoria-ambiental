document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form-static');
  if (!form) return;
  const serviceMap = {
    'gestion-residuos':'Gestión de residuos', 'recurso-hidrico':'Gestión del recurso hídrico',
    'saneamiento':'Saneamiento básico', 'permisos':'Trámites y permisos ambientales',
    'gestion-ambiental':'Gestión y planificación ambiental', 'formacion':'Consultoría y formación'
  };
  const params = new URLSearchParams(window.location.search);
  const service = params.get('service');
  const sector = params.get('sector');
  if (service) {
    const select = form.querySelector('[name="service"]');
    const wanted = serviceMap[service] || service;
    if (select) {
      const opt = [...select.options].find(o => o.value === wanted || o.textContent.trim() === wanted);
      if (opt) select.value = opt.value;
    }
  }
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const lines = [
      'Hola. Quiero solicitar asesoría ambiental.', '',
      `Nombre: ${data.get('name') || ''}`,
      `Empresa / organización: ${data.get('company') || 'No aplica'}`,
      `Correo: ${data.get('email') || ''}`,
      `Teléfono / WhatsApp: ${data.get('phone') || ''}`,
      `Ciudad / municipio: ${data.get('city') || 'No indicado'}`,
      `Servicio de interés: ${data.get('service') || 'Por definir'}`
    ];
    if (sector) lines.push(`Sector: ${sector.replaceAll('-', ' ')}`);
    lines.push(`Mensaje: ${data.get('message') || 'Sin mensaje adicional'}`);
    window.open(`https://wa.me/573137299981?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
  });
});