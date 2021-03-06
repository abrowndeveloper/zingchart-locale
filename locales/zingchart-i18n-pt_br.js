(function(){
  var locale = {
  	'rtl' : false,
  	'decimals-separator' : ',',
  	'thousands-separator' : '.',
  	'menu-reload' : 'Recarregar',
  	'menu-print' : 'Imprimir Gráfico',
  	'menu-viewaspng' : 'Visualizar Como PNG',
  	'menu-viewasjpg' : 'Visualizar Como JPG',
  	'menu-downloadpdf' : 'Baixar PDF',
  	'menu-downloadsvg' : 'Baixar SVG',
		'menu-exportdata' : 'Exportar Dados',	
		'menu-downloadcsv' : 'Baixar CSV',
		'menu-downloadxls' : 'Baixar XLS',
		'menu-viewdatatable' : 'Visualizar Como Mesa',
  	'menu-zoomin' : 'Mais Zoom',
  	'menu-zoomout' : 'Menos Zoom',
  	'menu-viewall' : 'Visualizar Todos',
  	'menu-viewsource' : 'Visualizar Código',
  	'menu-bugreport' : 'Reportar Erro',
  	'menu-switchto2d' : 'Mudar Para 2D',
  	'menu-switchto3d' : 'Mudar Para 3D',
  	'menu-showguide' : 'Mostrar Guia',
  	'menu-hideguide' : 'Esconder Guia',
  	'menu-switchtolin' : 'Mostrar Escala Linear',
  	'menu-switchtolog' : 'Mostrar Escala Logarítmica',
  	'menu-fullscreen' : 'Modo Tela Cheia',
  	'menu-exitfullscreen' : 'Sair do Modo Tela Cheia',
  	'menu-goback' : 'Voltar',
  	'menu-goforward' : 'Avançar',
  	'date-formats' : {
  		'msecond' : '%d %M %Y<br>%g:%i:%s %A<br>%q ms',
  		'second' : '%d %M %Y<br>%g:%i:%s %A',
  		'minute' : '%d %M %Y<br>%g:%i %A',
  		'hour' : '%d %M %Y<br>%g %A',
  		'day' : '%d %M %Y',
  		'month' : '%M %Y',
  		'year' : '%Y'
  	},
  	'days-short' : ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  	'days-long' : ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  	'months-short' : ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  	'months-long' : ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  	'sync-wait' : 'Aguarde...',
  	'export-wait' : 'Exportando...',
  	'progress-wait-long' : 'Aguarde. Carregando...',
  	'progress-wait-short' : 'Aguarde...',
  	'progress-wait-mini' : '...',
  	'error-header' : 'Ocorreu Um Erro',
  	'error-message' : 'Mensagem De Erro:',
  	'error-close' : 'Fechar',
  	'bugreport-header' : 'Enviar Relatório De Erro',
  	'bugreport-senddata' : 'Enviar Dados JSON',
  	'bugreport-sendcapture' : 'Enviar Gráfico de Captura',
  	'bugreport-yourcomment' : 'Seu Comentário:',
  	'bugreport-jsondata' : 'Dados JSON:',
  	'bugreport-youremail' : 'Seu Endereço De E-mail',
  	'bugreport-infoemail' : 'se você deseja receber por e-mail nossa resposta para o seu problema',
  	'bugreport-emailmandatory' : 'Endereço de e-mail é obrigatório...',
  	'bugreport-submit' : 'Enviar',
  	'bugreport-cancel' : 'Cancelar',
  	'bugreport-confirm' : 'Seu relatório de erro foi enviado.\n\nObrigado!',
  	'about-close' : 'Fechar',
  	'viewsource-jsonsource' : 'JSON Analisado',
  	'viewsource-originalsource' : 'JSON Original',
  	'viewsource-close' : 'Fechar',
  	'viewsource-apply' : 'Aplicar',
  	'viewimage-close' : 'Fechar',
  	'legend-pagination' : 'Página %page% de %pages%'
  };
  
  if (typeof zingchart !== 'undefined') {
    zingchart.i18n.pt_br = locale;
  }
  else if (typeof window === 'undefined' && module.exports !== 'undefined'){
    module.exports = locale;
  }
})();
