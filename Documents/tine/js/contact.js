// JavaScript pour la page Contact

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Récupérer les valeurs du formulaire
            const formData = {
                prenom: document.getElementById('prenom').value.trim(),
                nom: document.getElementById('nom').value.trim(),
                email: document.getElementById('email').value.trim(),
                message: document.getElementById('message').value.trim()
            };

            // Validation basique
            if (!validerFormulaire(formData)) {
                return;
            }

            // Simuler l'envoi du formulaire
            envoyerFormulaire(formData);
        });
    }

    // Animation d'entrée du formulaire
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach((group, index) => {
        group.style.opacity = '0';
        group.style.transform = 'translateY(20px)';

        setTimeout(() => {
            group.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            group.style.opacity = '1';
            group.style.transform = 'translateY(0)';
        }, 200 + index * 100);
    });
});

// Fonction de validation du formulaire
function validerFormulaire(data) {
    // Vérifier que tous les champs sont remplis
    if (!data.prenom || !data.nom || !data.email || !data.message) {
        showAlert('Veuillez remplir tous les champs.', 'warning');
        return false;
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showAlert('Veuillez entrer une adresse email valide.', 'warning');
        return false;
    }

    // Vérifier la longueur du message
    if (data.message.length < 10) {
        showAlert('Votre message doit contenir au moins 10 caractères.', 'warning');
        return false;
    }

    return true;
}

// Fonction pour simuler l'envoi du formulaire
function envoyerFormulaire(data) {
    // Afficher un message de chargement
    showAlert('Envoi de votre message en cours...', 'info');

    // Simuler un délai d'envoi (comme une requête AJAX)
    setTimeout(() => {
        // Simuler une réponse réussie
        afficherMessageConfirmation(data);

        // Réinitialiser le formulaire
        document.getElementById('contact-form').reset();

        // Cacher le message après 5 secondes
        setTimeout(() => {
            const confirmationMessage = document.getElementById('confirmation-message');
            if (confirmationMessage) {
                confirmationMessage.style.display = 'none';
            }
        }, 5000);

    }, 1500); // Délai de 1.5 secondes pour simuler l'envoi
}

// Fonction pour afficher le message de confirmation
function afficherMessageConfirmation(data) {
    const confirmationMessage = document.getElementById('confirmation-message');

    if (confirmationMessage) {
        // Personnaliser le message avec les données du formulaire
        confirmationMessage.innerHTML = `
            <div class="alert alert-info">
                <span class="alert-icon">✓</span>
                <div>
                    <strong>Merci ${data.prenom} ${data.nom} !</strong><br>
                    Votre message a été envoyé avec succès. Nous vous répondrons à l'adresse <strong>${data.email}</strong> dans les plus brefs délais.
                </div>
            </div>
        `;

        confirmationMessage.style.display = 'block';

        // Animation d'entrée
        confirmationMessage.style.opacity = '0';
        confirmationMessage.style.transform = 'translateY(-20px)';

        setTimeout(() => {
            confirmationMessage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            confirmationMessage.style.opacity = '1';
            confirmationMessage.style.transform = 'translateY(0)';
        }, 100);
    }

    showAlert('Message envoyé avec succès !', 'success');
}

// Fonction pour pré-remplir le formulaire avec des données de test (pour développement)
function preRemplirFormulaire() {
    document.getElementById('prenom').value = 'Jean';
    document.getElementById('nom').value = 'Dupont';
    document.getElementById('email').value = 'jean.dupont@email.com';
    document.getElementById('message').value = 'Bonjour, je suis intéressé par vos services agricoles. Pouvez-vous me donner plus d\'informations ?';
}

// Exposer la fonction de pré-remplissage pour les tests
window.preRemplirFormulaire = preRemplirFormulaire;
