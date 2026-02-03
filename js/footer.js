(function () {
    // Detect base path based on page depth
    var path = window.location.pathname;
    var base = '';

    // Pages in subdirectories like work/, partners/, es/work/, es/partners/
    var segments = path.replace(/^\//, '').split('/').filter(Boolean);
    // Remove the filename
    segments.pop();
    var depth = segments.length;

    if (depth >= 2) {
        // e.g. es/work/leslies.html or es/partners/bloomreach.html
        base = '../../';
    } else if (depth === 1) {
        // e.g. work/leslies.html, partners/bloomreach.html, es/index.html
        base = '../';
    }

    // Detect if we're in the Spanish section
    var isSpanish = /(?:^|\/)es\//.test(path);

    // Spanish prefix for internal links (es/ pages link to es/ pages)
    var langBase = isSpanish ? base + 'es/' : base;

    var labels = isSpanish
        ? {
            services: 'Servicios',
            agenticCommerce: 'Comercio Agéntico',
            dataAI: 'Datos, IA y Análisis',
            aiPlatforms: 'Plataformas Mejoradas con IA',
            support247: 'Soporte 24/7 con IA',
            cloudPerf: 'Nube y Rendimiento Inteligente',
            platforms: 'Plataformas',
            company: 'Empresa',
            about: 'Nosotros',
            work: 'Proyectos',
            partners: 'Socios',
            contact: 'Contacto',
            copyright: 'Todos los derechos reservados.',
            followUs: 'Síguenos'
        }
        : {
            services: 'Services',
            agenticCommerce: 'Agentic Commerce',
            dataAI: 'Data, AI & Analytics',
            aiPlatforms: 'AI-Enhanced Platforms',
            support247: '24/7 AI-Powered Support',
            cloudPerf: 'Intelligent Cloud & Performance',
            platforms: 'Platforms',
            company: 'Company',
            about: 'About',
            work: 'Work',
            partners: 'Partners',
            contact: 'Contact',
            copyright: 'All rights reserved.',
            followUs: 'Follow Us'
        };

    var html = ''
        + '<div class="container">'
        + '  <div class="footer-top">'
        + '    <div class="footer-brand">'
        + '      <a href="' + langBase + 'index.html" class="footer-logo">'
        + '        <img src="' + base + 'images/nulogic-logo.svg" alt="NULogic" />'
        + '      </a>'
        + '      <div class="footer-social">'
        + '        <span class="footer-social-label">' + labels.followUs + '</span>'
        + '        <a href="https://www.linkedin.com/company/nulogic/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">'
        + '          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>'
        + '        </a>'
        + '      </div>'
        + '    </div>'
        + '  </div>'
        + '  <div class="footer-content">'
        + '    <div class="footer-column">'
        + '      <h4>' + labels.services + '</h4>'
        + '      <ul>'
        + '        <li><a href="' + langBase + 'services.html#data-ai">' + labels.agenticCommerce + '</a></li>'
        + '        <li><a href="' + langBase + 'services.html#data-ai">' + labels.dataAI + '</a></li>'
        + '        <li><a href="' + langBase + 'services.html#commerce-build">' + labels.aiPlatforms + '</a></li>'
        + '        <li><a href="' + langBase + 'services.html#support">' + labels.support247 + '</a></li>'
        + '        <li><a href="' + langBase + 'services.html#cloud">' + labels.cloudPerf + '</a></li>'
        + '      </ul>'
        + '    </div>'
        + '    <div class="footer-column">'
        + '      <h4>' + labels.platforms + '</h4>'
        + '      <ul>'
        + '        <li><a href="' + langBase + 'platforms.html#sfcc">Salesforce Commerce Cloud</a></li>'
        + '        <li><a href="' + langBase + 'platforms.html#shopify">Shopify Plus</a></li>'
        + '        <li><a href="' + langBase + 'platforms.html#commercetools">commercetools</a></li>'
        + '        <li><a href="' + langBase + 'platforms.html#shopware">Shopware</a></li>'
        + '        <li><a href="' + langBase + 'platforms.html#magento">Magento</a></li>'
        + '      </ul>'
        + '    </div>'
        + '    <div class="footer-column">'
        + '      <h4>' + labels.company + '</h4>'
        + '      <ul>'
        + '        <li><a href="' + langBase + 'about.html">' + labels.about + '</a></li>'
        + '        <li><a href="' + langBase + 'work.html">' + labels.work + '</a></li>'
        + '        <li><a href="' + langBase + 'partners.html">' + labels.partners + '</a></li>'
        + '        <li><a href="' + langBase + 'contact.html">' + labels.contact + '</a></li>'
        + '      </ul>'
        + '    </div>'
        + '  </div>'
        + '  <div class="footer-bottom">'
        + '    <p>&copy; ' + new Date().getFullYear() + ' NULogic. ' + labels.copyright + '</p>'
        + '  </div>'
        + '</div>';

    var footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = html;
    }
})();
