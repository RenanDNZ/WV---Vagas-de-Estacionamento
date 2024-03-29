var vagas = {
  'A': {
      1: 61, 2: 62, 3: 63, 4: 1, 5: 2, 6: 3, 7: 4, 8: 5,
      101: 6, 102: 7, 103: 8, 104: 9, 105: 10, 106: 11, 107: 12, 108: 13,
      201: 14, 202: 15, 203: 16, 204: 17, 205: 18, 206: 19, 207: 20, 208: 21,
      301: 22, 302: 23, 303: 24, 304: 25, 305: 26, 306: 27, 307: 28, 308: 29,
      401: 30, 402: 31, 403: 32, 404: 33, 405: 34, 406: 35, 407: 36, 408: 37,
      501: 38, 502: 39, 503: 40, 504: 41, 505: 42, 506: 43, 507: 44, 508: 45,
      601: 46, 602: 47, 603: 48, 604: 49, 605: 50, 606: 51, 607: 52, 608: 53,
      701: 54, 702: 55, 703: 56, 704: 57, 705: 58, 706: 59, 707: 60, 708: 65,
      801: 66, 802: 67, 803: 68, 804: 69, 805: 70, 806: 71, 807: 72, 808: 73,
      901: 74, 902: 75, 903: 76, 904: 77, 905: 78, 906: 79, 907: 80, 908: 81,
      1001: 82, 1002: 83, 1003: 84, 1004: 85, 1005: 86, 1006: 87, 1007: 88, 1008: 89
  },
  'B': {
      1: 64, 2: 133, 3: 154, 4: 90, 5: 91, 6: 92, 7: 93, 8: 94,
      101: 95, 102: 96, 103: 97, 104: 98, 105: 99, 106: 100, 107: 101, 108: 102,
      201: 103, 202: 104, 203: 105, 204: 106, 205: 107, 206: 108, 207: 109, 208: 110,
      301: 111, 302: 112, 303: 113, 304: 114, 305: 115, 306: 116, 307: 117, 308: 118,
      401: 119, 402: 120, 403: 121, 404: 122, 405: 123, 406: 124, 407: 125, 408: 126,
      501: 127, 502: 128, 503: 129, 504: 130, 505: 131, 506: 132, 507: 134, 508: 135,
      601: 136, 602: 137, 603: 138, 604: 139, 605: 140, 606: 141, 607: 142, 608: 143,
      701: 144, 702: 145, 703: 146, 704: 147, 705: 148, 706: 149, 707: 150, 708: 151,
      801: 152, 802: 153, 803: 155, 804: 156, 805: 157, 806: 158, 807: 159, 808: 160,
      901: 161, 902: 162, 903: 163, 904: 164, 905: 165, 906: 166, 907: 167, 908: 168,
      1001: 169, 1002: 170, 1003: 171, 1004: 172, 1005: 173, 1006: 174, 1007: 175, 1008: 176
  }
};

function consultarVaga() {
  var bloco = document.getElementById('blocoInput').value.toUpperCase();
  var apto = document.getElementById('aptoInput').value;
  var resultadoElement = document.getElementById('resultado');

  try {
      var vaga = vagas[bloco][apto];
      resultadoElement.innerHTML = `Sua Vaga: ${vaga}`;
  } catch (error) {
      resultadoElement.innerHTML = "Apartamento ou bloco não encontrado.";
  }
}