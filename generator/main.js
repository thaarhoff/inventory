$(document).ready(function() {
    $('#configForm').on('submit', function(event) {
      event.preventDefault();
  
      const configName = $('#configName').val();
      const configOption = $('#configOption').val();
  
      const configData = {
        name: configName,
        option: configOption
      };
  
      const blob = new Blob([JSON.stringify(configData, null, 2)], { type: 'application/json' });
      saveAs(blob, 'config.json');
    });
  });