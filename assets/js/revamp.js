document.addEventListener('DOMContentLoaded', () => {
    // Tech Orbit Logic
    const initOrbit = () => {
        const orbitContainer = document.querySelector('.tech-orbit-container');
        if (!orbitContainer) return;

        const tools = [
            { icon: 'bi-python', label: 'Python', size: 80, radius: 150, speed: 0.001 },
            { icon: 'bi-robot', label: 'PyTorch', size: 70, radius: 220, speed: -0.0008 },
            { icon: 'bi-box', label: 'Docker', size: 60, radius: 300, speed: 0.0005 },
            { icon: 'bi-cloud', label: 'AWS', size: 60, radius: 380, speed: -0.0004 },
            { icon: 'bi-code-slash', label: 'LangChain', size: 70, radius: 220, speed: 0.0008 },
            { icon: 'bi-database', label: 'PostgreSQL', size: 60, radius: 300, speed: -0.0005 }
        ];

        tools.forEach((tool, index) => {
            const item = document.createElement('div');
            item.className = 'orbit-item';
            item.innerHTML = `<i class="bi ${tool.icon}"></i>`;
            item.style.width = `${tool.size}px`;
            item.style.height = `${tool.size}px`;
            item.setAttribute('title', tool.label);
            orbitContainer.appendChild(item);

            let angle = (index / tools.length) * Math.PI * 2;
            
            const animate = () => {
                angle += tool.speed;
                const x = Math.cos(angle) * tool.radius;
                const y = Math.sin(angle) * tool.radius;
                
                item.style.transform = `translate(${x}px, ${y}px)`;
                requestAnimationFrame(animate);
            };
            animate();
        });
    };

    // Hero Orb Mouse Interaction
    const initHeroOrb = () => {
        const orb = document.querySelector('.neural-orb');
        if (!orb) return;

        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 40;
            const y = (e.clientY / window.innerHeight - 0.5) * 40;
            orb.style.transform = `translate(${x}px, ${y}px) scale(${1 + Math.abs(x/200)})`;
        });
    };

    // AI Bot Toggle
    const initAIBot = () => {
        const orb = document.getElementById('ai-bot-orb');
        const chat = document.getElementById('chat-interface');
        if (!orb || !chat) return;

        orb.addEventListener('click', () => {
            chat.classList.toggle('chat-visible');
        });
    };

    // Typewriter effect for terminal
    const initTerminal = () => {
        const input = document.querySelector('.terminal-input');
        if (!input) return;

        const placeholders = [
            'Ask my agent anything...',
            'Tell me about the TTS project',
            'How did you build the Revenue Dashboard?',
            'Check my skills match...'
        ];
        let i = 0;
        setInterval(() => {
            input.setAttribute('placeholder', placeholders[i]);
            i = (i + 1) % placeholders.length;
        }, 3000);
    };

    initOrbit();
    initHeroOrb();
    initAIBot();
    initTerminal();
});
