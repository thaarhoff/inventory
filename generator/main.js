$(document).ready(function() {
  $('#configForm').on('submit', function(event) {
    event.preventDefault();

    const configName = $('#configName').val();
    const configOption = $('#configOption').val();

    const configData = {
      name: configName,
      option: configOption
    };

    const yamlStr = jsyaml.dump(configData);
    const blob = new Blob([yamlStr], { type: 'application/x-yaml' });
    saveAs(blob, 'config.yaml');
  });
});