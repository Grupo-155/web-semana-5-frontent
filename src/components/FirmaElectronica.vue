<template>
  <div>
    <v-container>
        <h1 class="display-3" style="text-align: center; margin-top: 50px; color: teal">¿Qué tipos de firmas electrónicas ofrecemos?</h1>
      <v-row>
        <v-col style="color: teal;" class="header-card_efirma">
            <v-row>
                <v-col><v-icon size="100">mdi-signature</v-icon></v-col>
                <v-col sm="">
                    <v-row style="height: 40px"></v-row>
                    <v-row><h3>Firma Simple</h3></v-row>
                </v-col>
            </v-row>
        </v-col>
        <v-col style="color: teal" class="header-card_efirma">
            <v-row>
                <v-col><v-icon size="100">mdi-signature-freehand</v-icon></v-col>
                <v-col sm="6">
                    <v-row style="height: 30px"></v-row>
                    <v-row><h3>Firma avanzada con biometria</h3></v-row>
                </v-col>
                
            </v-row>
        </v-col>
        <v-col style="color: teal" class="header-card_efirma">
            <v-row>
                <v-col>
                    <v-icon size="100"> mdi-certificate</v-icon>
                </v-col>
                <v-col>
                    <h3>Firma avanzada con certificado digital</h3>
                </v-col>
            </v-row>
         </v-col
        >
        <v-col style="color: teal" class="header-card_efirma">
            <v-row>
                <v-col>
                    <v-icon size="100">mdi-file-certificate-outline</v-icon>
                </v-col>
                <v-col sm="5">
                    <v-row style="height: 30px"></v-row>
                    <v-row><h3>Firma cualificada</h3></v-row>
                </v-col>
            </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          ><p
            >Consiste en firmar con un click o introduciendo un PIN enviado vía
            SMS.</p
          ></v-col
        >
        <v-col
          ><p
            >Firma biométrica. Se realiza con un trazo, igual que si firmas en
            papel.</p
          ></v-col
        >
        <v-col
          ><p
            >El firmante firma con su certificado digital, expedido por
            terceros.</p
          ></v-col
        >
        <v-col
          ><p
            >El firmante firma con un certificado digital expedido por
            Signaturit. Nuestro certificado digital es cualificado.</p
          ></v-col
        >
      </v-row>
      <v-row>
        <v-col
          ><v-icon></v-icon
          ><p
            >Es muy fácil de usar, pero a pesar de tener valor probatorio, no
            permite identificar al firmante de forma única.</p
          ></v-col
        >
        <v-col
          ><v-icon></v-icon
          ><p
            >Es muy fácil de usar y, además de tener valor probatorio, sí nos
            permite identificar al firmante de forma única.</p
          ></v-col
        >
        <v-col
          ><v-icon></v-icon
          ><p
            >Un certificado digital es el único medio que permite garantizar
            técnica y legalmente la identidad de una persona en Internet.</p
          ></v-col
        >
        <v-col
          ><v-icon></v-icon
          ><p
            >Un certificado digital es el único medio que permite garantizar
            técnica y legalmente la identidad de una persona en Internet.</p
          ></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
    data:() =>({

    })
};
</script>

<style>
.header-card_efirma{
    background-color:aliceblue;
    margin-top: 50px;
    border-radius: 10px;
    margin-right: 10px;
}
</style>
