/*	GOOGLE APP SCRIPTS
	Copiar dados de uma planilha para outra, mesmo sendo de drives/usuarios diferentes.
	OBS: Planilhas publicas.
	OBS2: as planilhas utilizadas não exitem, foi utilizado os links para exemplo.
*/

    // ler valores
    let sheet_ler = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1JJtDgtd9ZPCV2D5xdFIxecV0YWtc9kqk20Z4l8PKIUs/edit');
    sheet_ler = sheet_ler.getSheetByName("plan1");
    valores_lidos = sheet_ler.getRange('A1:D4').getValues();

   // seleciona planilha para gravar ranger
    let sheet_gravar = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1ZDirn6M3rDZ8oYr5uHnylDcr86yuh5FCy5pwseOj2a4/edit');
    sheet_gravar = sheet_gravar.getSheetByName("plan1");


     // grava em ranger do mesmo tamanho do ranger copiado
     sheet_gravar.getRange('A1:D4').setValues(valores_lidos);