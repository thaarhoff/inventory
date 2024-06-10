function getConfigData() {
    const configName = $('#configName').val() || "<nicht ausgefüllt>";
    const configOption = $('#configOption').val();
    const additionalText = $('#additionalText').val() || "<nicht ausgefüllt>";
    const configCheckbox = $('input[name="checkboxOptions"]:checked').map(function() { return this.value; }).get().join(", ") || "<nicht ausgefüllt>";
    const configRadio = $('input[name="configRadio"]:checked').val() || "<nicht ausgefüllt>";
    const configRange = $('#configRange').val();
    const configDate = $('#configDate').val() || "<nicht ausgefüllt>";
    const configColor = $('#configColor').val();
  
    return {
      name: configName,
      option: configOption,
      additionalText: configOption === 'Option2' ? additionalText : "N/A",
      checkbox: configCheckbox,
      radio: configRadio,
      range: configRange,
      date: configDate,
      color: configColor
    };
  }
  
  function generateYAML(configData) {
    const yamlStr = jsyaml.dump(configData);
    const blob = new Blob([yamlStr], { type: 'application/x-yaml' });
    saveAs(blob, 'config.yaml');
  }