window.Webflow ||= [];
window.Webflow.push(() => {
  // Configuration
  const config = {
    formId: '0aa12cd4-f23d-4cd8-8fc6-eea9849469c8',
    redirectUrls: [
      'https://meetings.hubspot.com/nonoka-sugawara/stotles-introduction',
      'https://meetings.hubspot.com/dominic-bennett',
    ],
    experienceFieldName: 'pricing_page_pub_sec_experience_2025',
    experienceOptions: [
      'Legacy - 3 - Won more than 5 large contracts',
      'Legacy -4 - Won more than 50 contracts',
      'Buyer: Work for a government authority',
    ],
    employeeCountFieldName: 'emplyee_count__request_a_demo',
    employeeCountOptions: ['11-50', '51-200', '201-500'],
  };

  // Helper functions
  const getRandomRedirectUrl = () =>
    config.redirectUrls[Math.floor(Math.random() * config.redirectUrls.length)];

  const findFieldValue = (data, fieldName) => data.find((item) => item.name === fieldName)?.value;

  const toggleElements = (selector, display) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.style.display = display;
    });
  };

  // Main event listener
  window.addEventListener('message', function (event) {
    if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmit') {
      //   console.log('Form submission event:', event);

      if (event.data.id === config.formId) {
        const experienceValue = findFieldValue(event.data.data, config.experienceFieldName);
        const employeeCountValue = findFieldValue(event.data.data, config.employeeCountFieldName);

        if (
          config.experienceOptions.includes(experienceValue) &&
          config.employeeCountOptions.includes(employeeCountValue)
        ) {
          window.location.replace(getRandomRedirectUrl());
        } else {
          document.querySelector(`[formid="${event.data.id}"]`).style.display = 'none';
          toggleElements('[data-element="hubspot-show"]', 'block');
          toggleElements('[data-element="hubspot-hide"]', 'none');
        }
      }
    }
  });
});
