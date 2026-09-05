// ── Always dark ────────────────────────────────────────────
const initDarkMode = () => {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    localStorage.removeItem('darkMode');
};

// ── Header profile ──────────────────────────────────────────
const renderProfile = () => {
    const { profile } = portfolioData;
    document.getElementById('avatar').textContent        = profile.initials;
    document.getElementById('profile-name').textContent  = profile.name;
    document.getElementById('profile-title').textContent = profile.title;
};

// ── Header quick links (GitHub / LinkedIn / Resume) ─────────
const renderHeaderLinks = () => {
    const { headerLinks } = portfolioData;
    const el = document.getElementById('header-links');
    if (!el) return;

    const githubSvg = `<svg class="header-btn-icon" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>`;

    el.innerHTML = headerLinks.map(link => {
        const attrs = link.external
            ? `target="_blank" rel="noopener noreferrer"`
            : (link.download ? `download="${link.download}"` : '');
        const isGithub = (link.label && link.label.toLowerCase().includes('github')) || (link.href && link.href.includes('github'));
        const iconHtml = isGithub ? githubSvg : '';
        const labelText = isGithub ? link.label.replace('🐙', '').trim() : link.label;
        return `<a href="${link.href}" class="header-link" ${attrs}>${iconHtml}${labelText}</a>`;
    }).join('');
};

// ── Navigation ──────────────────────────────────────────────
const renderNavigation = () => {
    const { navigation } = portfolioData;
    const navElement = document.getElementById('nav');

    navigation.forEach((item, index) => {
        const button = document.createElement('button');
        button.className = `nav-btn ${index === 0 ? 'active' : ''}`;
        button.textContent = item.label;
        button.setAttribute('data-section', item.id);
        button.addEventListener('click', () => {
            document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
        });
        navElement.appendChild(button);
    });
};

// ── Scroll spy ──────────────────────────────────────────────
const initScrollSpy = () => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                document.querySelectorAll('.nav-btn').forEach(btn => {
                    btn.classList.toggle('active', btn.getAttribute('data-section') === id);
                });
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(s => observer.observe(s));
};

// ── About / Hero ────────────────────────────────────────────
const renderAbout = () => {
    const { about } = portfolioData;
    const container = document.querySelector('#about .section-container');

    container.innerHTML = `
        <div class="about-content reveal">
            <div class="about-left">
                <span class="badge">${about.badge}</span>
                <h1 class="about-name">${about.heading.line1}</h1>
                <p class="about-role"><span class="text-accent">${about.heading.line2}</span></p>
                <p class="about-tagline">${about.tagline}</p>
                <div class="about-paragraphs text-muted">
                    ${about.paragraphs.map(p => `<p>${p}</p>`).join('')}
                </div>
                <div class="about-buttons">
                    <button class="btn-primary" onclick="document.getElementById('featured').scrollIntoView({behavior:'smooth'})">
                        <svg class="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M19 9l-7 7-7-7" />
                        </svg>
                        ${about.viewProjectsCta}
                    </button>
                    <a href="${about.resumePath}" download="Rishi_Chauhan_Resume.pdf" class="btn-secondary">
                        <svg class="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        ${about.resumeButton}
                    </a>
                    <a href="${about.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                        <svg class="btn-icon" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        ${about.githubButton}
                    </a>
                </div>
            </div>
            <div class="about-right">
                <div class="about-image-container">
                    <img src="${about.image}" alt="${portfolioData.profile.name}" class="about-image" />
                </div>
            </div>
        </div>
    `;
};

// ── Featured Project ────────────────────────────────────────
const renderFeaturedProject = () => {
    const fp = portfolioData.featuredProject;
    const container = document.querySelector('#featured .section-container');

    container.innerHTML = `
        <div class="fp-header reveal" style="--reveal-delay:0ms">
            <span class="badge">${fp.badge}</span>
        </div>

        <div class="fp-layout">
            <!-- Left: video -->
            <div class="fp-visual reveal" style="--reveal-delay:80ms">
                <div class="fp-video-wrap">
                    <iframe
                        src="${fp.videoUrl}"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        loading="lazy"
                        title="${fp.name} gameplay">
                    </iframe>
                </div>
            </div>

            <!-- Right: info -->
            <div class="fp-info reveal" style="--reveal-delay:160ms">
                <div class="fp-meta">
                    <span class="fp-genre">${fp.genre}</span>
                    <span class="fp-platform">${fp.platform}</span>
                    <span class="fp-status">${fp.status}</span>
                </div>

                <h2 class="fp-title">${fp.name}</h2>
                <p class="fp-tagline">${fp.tagline}</p>

                <div class="fp-tech-strip">
                    ${fp.tech.map(t => `<span class="fp-tech-pill">${t}</span>`).join('')}
                </div>

                <div class="fp-built">
                    <h3 class="fp-built-label">What I Built</h3>
                    <ul class="fp-built-list">
                        ${fp.whatIBuilt.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>

                <div class="fp-challenge">
                    <span class="fp-challenge-label">Challenge</span>
                    <p>${fp.challenge}</p>
                    <span class="fp-challenge-label" style="margin-top:0.5rem;display:block">Solution</span>
                    <p>${fp.solution}</p>
                </div>

                <div class="fp-actions">
                    <a href="${fp.playUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary">
                        <svg class="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Play on Google Play
                    </a>
                </div>
            </div>
        </div>
    `;
};

// ── More Projects (horizontal carousel) ────────────────────
const renderMoreProjects = () => {
    const { projects } = portfolioData;
    const container = document.querySelector('#projects .section-container');

    container.innerHTML = `
        <div class="mp-header reveal" style="--reveal-delay:0ms">
            <span class="badge">${projects.badge}</span>
            <h2 class="section-heading">
                ${projects.heading.line1} <span class="text-accent">${projects.heading.line2}</span>
            </h2>
        </div>

        <div class="mp-track-wrap">
            <button class="mp-arrow mp-arrow--left" aria-label="Scroll left">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
            </button>

            <div class="mp-track" id="mp-track">
                ${projects.items.map((project, i) => {
                    const techHtml = project.tech.map(t =>
                        `<span class="mp-tech-pill">${t}</span>`
                    ).join('');
                    const linkHref = project.link || project.url || '#';
                    const descHtml = (project.description || project.shortDesc || project.summary)
                        ? `<p class="mp-card-desc">${project.description || project.shortDesc || project.summary}</p>`
                        : '';
                    const moreInfoHtml = project.moreInfo
                        ? `<div class="mp-card-more">
                               <div class="mp-more-label">
                                   <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                   </svg>
                                   More Info
                               </div>
                               <p class="mp-more-text">${project.moreInfo}</p>
                               <a href="${linkHref}" target="_blank" rel="noopener noreferrer" class="mp-more-link">
                                   View Project
                                   <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                             d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                   </svg>
                               </a>
                           </div>`
                        : '';

                    const videoSrc = project.videoUrl.includes('?')
                        ? `${project.videoUrl}&enablejsapi=1&mute=1&playsinline=1`
                        : `${project.videoUrl}?enablejsapi=1&mute=1&playsinline=1`;

                    return `
                    <div class="mp-card reveal" style="--reveal-delay:${i * 60}ms">
                        <div class="mp-video">
                            <iframe
                                src="${videoSrc}"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                                loading="lazy"
                                title="${project.name} gameplay">
                            </iframe>
                        </div>
                        <div class="mp-card-body">
                            <div class="mp-card-meta">
                                <span class="mp-card-type">${project.type}</span>
                                <span class="mp-card-platform">${project.platform}</span>
                            </div>
                            <h3 class="mp-card-title">${project.name}</h3>
                            <div class="mp-tech-strip">${techHtml}</div>
                            ${descHtml}
                            <a href="${linkHref}" target="_blank" rel="noopener noreferrer" class="mp-card-link">
                                View Project
                                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                </svg>
                            </a>
                        </div>
                        ${moreInfoHtml}
                    </div>`;
                }).join('')}
            </div>

            <button class="mp-arrow mp-arrow--right" aria-label="Scroll right">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
            </button>
        </div>
    `;

    initCarousel();
};

// ── Carousel logic ──────────────────────────────────────────
const initCarousel = () => {
    const track   = document.getElementById('mp-track');
    if (!track) return;
    const btnLeft  = document.querySelector('.mp-arrow--left');
    const btnRight = document.querySelector('.mp-arrow--right');

    const scrollBy = () => track.clientWidth * 0.75;

    btnLeft?.addEventListener('click',  () => track.scrollBy({ left: -scrollBy(), behavior: 'smooth' }));
    btnRight?.addEventListener('click', () => track.scrollBy({ left:  scrollBy(), behavior: 'smooth' }));

    // Smooth drag-to-scroll without snapping
    let isDown = false, startX = 0, scrollStart = 0, hasDragged = false;
    track.addEventListener('mousedown', e => {
        isDown = true;
        hasDragged = false;
        track.classList.add('is-dragging');
        startX      = e.pageX - track.offsetLeft;
        scrollStart = track.scrollLeft;
    });

    track.addEventListener('mouseleave', () => {
        if (!isDown) return;
        isDown = false;
        track.classList.remove('is-dragging');
    });

    track.addEventListener('mouseup', () => {
        isDown = false;
        setTimeout(() => track.classList.remove('is-dragging'), 60);
    });

    track.addEventListener('mousemove', e => {
        if (!isDown) return;
        e.preventDefault();
        const x    = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 1.3;
        if (Math.abs(walk) > 4) hasDragged = true;
        track.scrollLeft = scrollStart - walk;
    });

    // Prevent accidental link clicks if user was dragging
    track.addEventListener('click', e => {
        if (hasDragged) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true);

    // Hover to play YouTube video on card, pause on leave
    const cards = track.querySelectorAll('.mp-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const iframe = card.querySelector('iframe');
            if (iframe && iframe.contentWindow) {
                iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            }
        });

        card.addEventListener('mouseleave', () => {
            const iframe = card.querySelector('iframe');
            if (iframe && iframe.contentWindow) {
                iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            }
        });
    });

    // Show/hide arrows based on scroll position
    const updateArrows = () => {
        const atStart = track.scrollLeft <= 4;
        const atEnd   = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
        if (btnLeft)  btnLeft.style.opacity  = atStart ? '0.3' : '1';
        if (btnRight) btnRight.style.opacity = atEnd   ? '0.3' : '1';
    };
    track.addEventListener('scroll', updateArrows, { passive: true });
    updateArrows();
};

// ── Skills ──────────────────────────────────────────────────
const renderSkills = () => {
    const { skills } = portfolioData;
    const container = document.querySelector('#skills .section-container');

    let delay = 0;
    const groupsHtml = skills.groups.map(group => {
        const itemsHtml = group.items.map(skill => {
            const d = delay; delay += 40;
            return `<li class="skill-item reveal" style="--reveal-delay:${d}ms">${skill}</li>`;
        }).join('');
        return `
            <div class="skill-group reveal" style="--reveal-delay:${delay - group.items.length * 40}ms">
                <h3 class="skill-group-label">${group.label}</h3>
                <ul class="skills-list">${itemsHtml}</ul>
            </div>`;
    }).join('');

    container.innerHTML = `
        <span class="badge reveal" style="--reveal-delay:0ms">${skills.badge}</span>
        <h2 class="section-heading reveal" style="--reveal-delay:60ms">
            ${skills.heading.line1} <span class="text-accent">${skills.heading.line2}</span>
        </h2>
        <div class="skills-groups">${groupsHtml}</div>
    `;
};

// ── Experience ──────────────────────────────────────────────
const renderExperience = () => {
    const { experience } = portfolioData;
    const container = document.querySelector('#experience .section-container');

    container.innerHTML = `
        <span class="badge reveal" style="--reveal-delay:0ms">${experience.badge}</span>
        <h2 class="section-heading reveal" style="--reveal-delay:60ms">
            ${experience.heading.line1} <span class="text-accent">${experience.heading.line2}</span>
        </h2>
        <div class="experience-list">
            ${experience.items.map(item => `
                <div class="experience-card reveal">
                    <div class="experience-header">
                        <div class="experience-header-left">
                            <h3 class="experience-company">${item.company}</h3>
                            <span class="experience-role">— <em>${item.role}</em></span>
                        </div>
                        <div class="experience-meta">${item.period} | ${item.location}</div>
                    </div>
                    <ul class="experience-points">
                        ${item.points.map((point, i) => `
                            <li class="experience-point reveal"
                                style="--reveal-delay:${120 + i * 80}ms">${point}</li>
                        `).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
    `;
};

// ── Contact ─────────────────────────────────────────────────
const renderContact = () => {
    const { contact } = portfolioData;
    const container = document.querySelector('#contact .section-container');

    const getIcon = type => {
        if (type === 'email') return `
            <svg class="contact-icon email-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>`;
        if (type === 'linkedin') return `
            <svg class="contact-icon linkedin-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>`;
        return '';
    };

    container.innerHTML = `
        <span class="badge reveal" style="--reveal-delay:0ms">${contact.badge}</span>
        <h2 class="section-heading reveal" style="--reveal-delay:60ms">
            ${contact.heading.line1}<br>
            <span class="text-accent">${contact.heading.line2}</span>
        </h2>
        <p class="contact-subtext text-muted reveal" style="--reveal-delay:120ms">${contact.subtext}</p>
        <div class="contact-cards">
            ${contact.links.map((link, i) => `
                <a href="${link.href}" class="contact-card reveal"
                   style="--reveal-delay:${180 + i * 60}ms"
                   ${link.type === 'linkedin' ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                    <div class="contact-icon-container ${link.type}-icon-bg">
                        ${getIcon(link.type)}
                    </div>
                    <div class="contact-info">
                        <div class="contact-label">${link.label}</div>
                        <div class="contact-value text-secondary">${link.value}</div>
                    </div>
                    <svg class="chevron-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                </a>
            `).join('')}
        </div>
    `;
};

// ── Footer ──────────────────────────────────────────────────
const renderFooter = () => {
    const { footer } = portfolioData;
    const el = document.getElementById('footer');
    if (!el) return;

    const linksHtml = footer.links.map(link => {
        const attrs = link.external
            ? `target="_blank" rel="noopener noreferrer"`
            : (link.download ? `download="${link.download}"` : '');
        return `<a href="${link.href}" class="footer-link" ${attrs}>${link.label}</a>`;
    }).join('');

    el.innerHTML = `
        <div class="footer-inner">
            <div class="footer-copy">
                © ${footer.year} ${footer.name} · ${footer.role}
            </div>
            <div class="footer-links">${linksHtml}</div>
        </div>
    `;
};

// ── Scroll reveal ───────────────────────────────────────────
const initScrollReveal = () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el    = entry.target;
                const delay = el.style.getPropertyValue('--reveal-delay');
                if (delay) {
                    el.style.transitionDelay = delay;
                    setTimeout(() => {
                        el.style.transitionDelay = '';
                    }, 600);
                }
                el.classList.add('visible');
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

// ── Init ────────────────────────────────────────────────────
const init = () => {
    initDarkMode();
    renderProfile();
    renderHeaderLinks();
    renderNavigation();
    renderAbout();
    renderFeaturedProject();
    renderMoreProjects();
    renderSkills();
    renderExperience();
    renderContact();
    renderFooter();
    initScrollSpy();
    initScrollReveal();
};

document.addEventListener('DOMContentLoaded', init);
