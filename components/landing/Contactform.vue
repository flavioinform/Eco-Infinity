<script setup>
onMounted(() => {
  const form = document.getElementById("form");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      form.querySelectorAll(":invalid")[0].focus();
      return;
    }
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Enviando...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          result.classList.add("text-green-500");
          result.innerHTML = json.message;
        } else {
          console.log(response);
          result.classList.add("text-red-500");
          result.innerHTML = json.message;
        }
      })
      .catch((error) => {
        console.log(error);
        result.innerHTML = "Ocurrió un error!";
      })
      .then(function () {
        form.reset();
        form.classList.remove("was-validated");
        setTimeout(() => {
          result.style.display = "none";
        }, 5000);
      });
  });
});
</script>

<template>
  <form
    action="https://api.web3forms.com/submit"
    method="POST"
    id="form"
    class="needs-validation"
    novalidate
  >
    <input type="hidden" name="access_key" value="5cc5526b-2028-4b51-a1ae-d73981cbc869" />
    <input
      type="checkbox"
      class="hidden"
      style="display: none"
      name="botcheck"
    />
    <div class="mb-5">
      <input
        type="text"
        placeholder="Nombre"
        required
        class="bg-white text-[#1D4088] w-full px-4 py-3 border border-[#D8E2F0] placeholder:text-[#1D4088]/40 rounded-xl outline-none focus:border-[#70C3D4] focus:ring-2 focus:ring-[#70C3D4]/25 shadow-sm transition-all font-semibold"
        name="name"
      />
      <div class="empty-feedback invalid-feedback text-red-600 text-xs font-bold mt-1.5">
        Por favor ingresa tu nombre completo.
      </div>
    </div>
    <div class="mb-5">
      <label for="email_address" class="sr-only">Correo electrónico</label>
      <input
        id="email_address"
        type="email"
        placeholder="tu@correo.com"
        name="email"
        required
        class="bg-white text-[#1D4088] w-full px-4 py-3 border border-[#D8E2F0] placeholder:text-[#1D4088]/40 rounded-xl outline-none focus:border-[#70C3D4] focus:ring-2 focus:ring-[#70C3D4]/25 shadow-sm transition-all font-semibold"
      />
      <div class="empty-feedback text-red-600 text-xs font-bold mt-1.5">
        Proporcione un correo electrónico válido por favor.
      </div>
      <div class="invalid-feedback text-red-600 text-xs font-bold mt-1.5">
        Proporcione un correo electrónico válido por favor.
      </div>
    </div>
    <div class="mb-5">
      <textarea
        name="message"
        required
        placeholder="Tu mensaje"
        class="bg-white text-[#1D4088] w-full px-4 py-3 border border-[#D8E2F0] placeholder:text-[#1D4088]/40 rounded-xl outline-none h-36 focus:border-[#70C3D4] focus:ring-2 focus:ring-[#70C3D4]/25 shadow-sm transition-all font-semibold resize-none"
      ></textarea>
      <div class="empty-feedback invalid-feedback text-red-600 text-xs font-bold mt-1.5">
        Por favor ingresa tu mensaje.
      </div>
    </div>
    <LandingButton type="submit" size="lg" block class="uppercase tracking-wider font-extrabold text-sm">Enviar Mensaje</LandingButton>
    <div id="result" class="mt-3 text-center font-bold text-[#1D4088]"></div>
  </form>
</template>

<style>
.invalid-feedback,
.empty-feedback {
  display: none;
}

.was-validated :placeholder-shown:invalid ~ .empty-feedback {
  display: block;
}

.was-validated :not(:placeholder-shown):invalid ~ .invalid-feedback {
  display: block;
}

.is-invalid,
.was-validated :invalid {
  border-color: #dc3545;
}
</style>
