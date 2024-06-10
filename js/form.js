$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
  
    function updateConfigSummary() {
      const configData = getConfigData();
      const yamlStr = jsyaml.dump(configData);
      $('#configSummary').text(yamlStr);
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
  