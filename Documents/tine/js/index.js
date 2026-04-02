// JavaScript pour la page Accueil

document.addEventListener('DOMContentLoaded', function() {
    // Animation du hero section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';

        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 200);
    }

    // Animation des cartes de fonctionnalités
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';

        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 400 + index * 200);
    });

    // Gestionnaire d'événements pour le bouton "Voir les annonces"
    const viewAnnouncementsBtn = document.querySelector('.btn-primary[href="annonces.html"]');
    if (viewAnnouncementsBtn) {
        viewAnnouncementsBtn.addEventListener('click', function(e) {
            showAlert('Redirection vers les annonces...', 'info', 1500);
        });
    }

    // Statistiques simulées pour la page d'accueil
    const stats = {
        totalUsers: 1250,
        totalAnnouncements: 89,
        activeSubscriptions: 456
    };

    // Afficher les statistiques dans la console (pour debug)
    console.log('Statistiques Mbaay Mi:', stats);

    // Fonction pour mettre à jour les statistiques affichées (si présentes)
    function updateStatsDisplay() {
        const statsElements = document.querySelectorAll('[data-stat]');
        statsElements.forEach(element => {
            const statKey = element.getAttribute('data-stat');
            if (stats[statKey] !== undefined) {
                element.textContent = stats[statKey].toLocaleString();
            }
        });
    }

    updateStatsDisplay();
});
