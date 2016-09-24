module.exports = {
<%= publicPackageNames
      .map(pn => `  ${pn.replace('jsdsaa-', '')}: require("${pn}")`)
      .join(',\n') %>
};
