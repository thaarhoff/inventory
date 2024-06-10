$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
  
    function updateConfigSummary() {
      const configData = getConfigData();
      $('#configSummary').text(JSON.stringify(configData, null, 2));
    }
  
    $('#configOption').change(function() {
      if ($(this).val() === 'Option2') {
        $('#additionalTextField').show();
      } else {
        $('#additionalTextField').hide();
      }
      updateConfigSummary();
    });
  
    $('#configForm input, #configForm select').on('input change', function() {
      updateConfigSummary();
    });
  
    $('#configForm').on('submit', function(event) {
      event.preventDefault();
      const configData = getConfigData();
      generateYAML(configData);
    });
  
    updateConfigSummary(); // Initial update of summary
  });