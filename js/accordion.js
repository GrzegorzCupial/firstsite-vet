$('.accordion').on('click', '.accordion-control', function(e){ // Po kliknięciu.
  e.preventDefault();                    // Uniemożliwienie domyślnej akcji przycisku.
  $(this)                                // Ustalenie elementu klikniętego przez użytkownika.
    .next('.accordion-panel')            // Wybór odpowiedniego panelu.
    .not(':animated')                    // Jeżeli animacja nie jest aktualnie odtwarzana.
    .slideToggle();                      // Użycie animacji do wyświetlenia lub ukrycia panelu.
});