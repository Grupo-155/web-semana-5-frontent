<template>
  <v-container>
    <v-row class="mt-12">
      <h1 class="display-1">
        Facilita la firma digital de acuerdos y contratos
        <span style="color: teal">con plena seguridad jurídica</span>
      </h1>
    </v-row>
    <v-row class="mt-16">
      <v-col class="services-col" style="width: 550px">
        <div class="services-img mt-12 mr-12" style="width: 550px">
          <v-img :src="require('../assets/image-agiliza-1.png')" width="550" style="border-radius: 20px" />
        </div>
      </v-col>
      <v-col >
          <v-row style="height: 150px"></v-row>        
          <v-row>
            <h2><span style="color: teal">Agiliza </span>los procesos de firma de contratos</h2>
            <p class="mt-12">Consigue la firma digital de cualquier documento en un solo día: actas de juntas, pactos de socios, reclamaciones de deuda, etc. Además, podrás seguir el proceso de firma en tiempo real, y configurar recordatorios automáticos.</p>
          </v-row>
      </v-col>
    </v-row>
    
    <v-row class="mt-16">
        <v-col >
          <v-row style="height: 150px"></v-row>        
          <v-row>
            <h2><span style="color: teal">Facilita </span>la firma a tus clientes o colaboradores</h2>
            <p class="mt-12">Firmas con biometría o certificado digital, desde ordenador, tablet o móvil, con las máximas garantías legales y de seguridad. Tus clientes y colaboradores estarán encantados con la facilidad y conveniencia del proceso de firma. Sin papeleo, sin escaneo, sin perder tiempo.</p>
          </v-row>
      </v-col>
      <v-col class="services-col" style="width: 550px">
        <div class="services-img mt-12 mr-12" style="width: 550px">
          <v-img :src="require('../assets/image-facilita-1.png')" width="550" style="border-radius: 20px" />
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-16">
      <v-col class="services-col" style="width: 550px">
        <div class="services-img mt-12 mr-12" style="width: 550px">
          <v-img :src="require('../assets/image-legal-1.png')" width="550" style="border-radius: 20px" />
        </div>
      </v-col>
      <v-col >
          <v-row style="height: 150px"></v-row>        
          <v-row>
            <h2>Máximo <span style="color: teal">cumplimiento legal</span>  y mínimo riesgo</h2>
            <p class="mt-12">Somos prestadores cualificados de servicios de confianza, y cumplimos con el Reglamento eIDAS. Utilizamos además el sello de tiempo cualificado en nuestros procesos de firma, garantizando que ningún documento puede modificarse después de ser firmado.</p>
          </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>
.services-col{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>