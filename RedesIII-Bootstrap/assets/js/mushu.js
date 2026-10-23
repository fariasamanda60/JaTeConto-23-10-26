
/* =====================================================
   MUSHU — MASCOTE VETORIAL DO JÁ TE CONTO
   Desenho em SVG + animações da senha
   ===================================================== */

(() => {
  "use strict";

  const desenho = `
  <svg class="mushu-svg"
       viewBox="0 0 500 560"
       xmlns="http://www.w3.org/2000/svg"
       role="img"
       aria-label="Mushu lendo um livro">

    <defs>
      <linearGradient id="corpoMushu" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#e3fae5"/>
        <stop offset="100%" stop-color="#c6efd0"/>
      </linearGradient>

      <linearGradient id="livroMushu" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#2e9a89"/>
        <stop offset="100%" stop-color="#16796f"/>
      </linearGradient>
    </defs>

    <!-- BROTINHO -->
    <g class="brotinho">
      <path d="M245 90
               C213 20 151 8 111 25
               C105 66 139 103 207 99
               L244 121 Z"
            fill="#80c85d" class="contorno"/>

      <path d="M252 91
               C272 28 328 4 381 15
               C388 62 347 101 287 99
               L253 121 Z"
            fill="#80c85d" class="contorno"/>

      <path d="M244 89
               Q249 111 247 137
               L263 137
               Q261 112 264 88"
            fill="none"
            stroke="#80c85d"
            stroke-width="13"
            stroke-linecap="round"/>
    </g>

    <!-- CORPO -->
    <path class="contorno"
          fill="url(#corpoMushu)"
          d="M249 130
             C175 126 103 135 76 196
             C54 247 49 327 31 382
             C12 444 41 478 95 478
             C120 519 177 535 249 526
             C324 538 391 522 415 482
             C465 483 488 449 471 391
             C454 328 448 247 425 193
             C401 140 328 126 249 130 Z"/>

    <!-- BRILHOS -->
    <path d="M207 145
             Q248 126 295 139
             Q330 143 354 160
             Q306 155 274 164
             Q238 169 207 145Z"
          fill="#fff0c9"/>

    <path d="M378 153
             Q419 165 431 199
             Q439 223 428 246
             Q418 258 416 233
             Q411 197 378 153Z"
          fill="#fff0c9"/>

    <!-- SOBRANCELHAS -->
    <g class="sobrancelhas">
      <path d="M127 239 Q145 218 165 230"
            class="contorno" fill="none" stroke-width="7"/>

      <path d="M333 231 Q354 224 371 244"
            class="contorno" fill="none" stroke-width="7"/>
    </g>

    <!-- OLHOS -->
    <g id="grupo-olhos">
      <g id="olho-esquerdo" class="olho">
        <ellipse cx="147" cy="285" rx="32" ry="39" fill="#35190f"/>
        <circle cx="157" cy="270" r="10" fill="#fff"/>
      </g>

      <g id="olho-direito" class="olho">
        <ellipse cx="350" cy="297" rx="32" ry="39" fill="#35190f"/>
        <circle cx="360" cy="282" r="10" fill="#fff"/>
      </g>
    </g>

    <!-- BOCHECHAS -->
    <ellipse cx="91" cy="329" rx="26" ry="18" fill="#ffa9b4"/>
    <ellipse cx="405" cy="351" rx="26" ry="18" fill="#ffa9b4"/>

    <!-- SORRISO -->
    <path d="M197 316
             Q247 339 297 316
             Q302 357 249 362
             Q202 357 197 316Z"
          fill="#3b1b12"
          stroke="#3b1b12"
          stroke-width="5"
          stroke-linejoin="round"/>

    <path d="M213 338
             Q249 354 282 338
             Q252 370 225 351Z"
          fill="#ff766e"/>

    <!-- CORAÇÃO -->
    <path d="M398 408
             C377 384 349 406 370 430
             L398 455
             L426 430
             C447 405 420 384 398 408Z"
          fill="#238d7d"/>

    
<!-- BRAÇOS E PATINHAS: partes conectadas -->
<g id="braco-esquerdo" class="braco-animado">
  <path
    class="braco-contorno"
    d="M110 420
       C92 411 84 389 91 363
       L119 302
       Q130 279 148 286
       Q165 293 155 315
       L132 372
       Q128 389 145 400
       Z"/>

  <path
    class="mao-contorno"
    d="M119 315
       C99 312 94 294 108 281
       C120 270 135 279 139 291
       C149 277 167 283 168 299
       C169 315 149 328 132 326
       Z"/>
</g>

<g id="braco-direito" class="braco-animado">
  <path
    class="braco-contorno"
    d="M389 420
       C410 409 417 388 405 362
       L379 306
       Q369 283 351 291
       Q335 299 345 320
       L366 373
       Q370 390 353 401
       Z"/>

  <path
    class="mao-contorno"
    d="M381 320
       C401 315 406 296 392 284
       C380 273 365 281 361 294
       C350 280 333 287 333 302
       C332 318 351 331 368 329
       Z"/>
</g>


    <!-- LIVRO -->
    <g id="grupo-livro">
      <path d="M101 392 Q157 365 238 411 L238 507 Q164 475 108 494Z"
            fill="#fff0ce" class="contorno"/>

      <path d="M238 411 Q309 365 389 391 L383 493 Q309 475 238 507Z"
            fill="#fff0ce" class="contorno"/>

      <path d="M99 408 Q169 393 238 430 L238 520 Q164 499 106 509Z"
            fill="url(#livroMushu)" class="contorno"/>

      <path d="M238 430 Q314 391 391 407 L383 509 Q309 500 238 520Z"
            fill="url(#livroMushu)" class="contorno"/>

      <path d="M238 430 L238 520"
            fill="none" class="contorno" stroke-width="7"/>
    </g>


    <!-- MARCADOR DO LIVRO -->
    <path d="M374 147 L424 151 L414 219 L394 205 L376 218Z"
          fill="#258e80"
          class="contorno"
          stroke-width="6"/>

  </svg>`;

  // Insere o mesmo desenho em cada espaço reservado.
  document.querySelectorAll("[data-mushu]").forEach((palco) => {
    palco.innerHTML = desenho;
  });

  const senha = document.getElementById("senha");
  const alternar = document.getElementById("alternarSenha");

  const palcoLogin = document.querySelector(
    ".pagina-login [data-mushu]"
  );

  const svg = palcoLogin?.querySelector(".mushu-svg");

  if (!senha || !alternar || !svg) return;

  function atualizarMushu() {
    let estado = "normal";

    if (senha.value.length > 0) {
      estado = senha.type === "password" ? "oculta" : "visivel";
    }

    svg.dataset.estado = estado;

    alternar.textContent =
      senha.type === "password" ? "Mostrar senha" : "Ocultar senha";

    alternar.setAttribute(
      "aria-pressed",
      String(senha.type === "text")
    );
  }

  senha.addEventListener("input", atualizarMushu);
  senha.addEventListener("change", atualizarMushu);

  alternar.addEventListener("click", () => {
    senha.type =
      senha.type === "password" ? "text" : "password";

    atualizarMushu();
    senha.focus();
  });

  atualizarMushu();
})();
