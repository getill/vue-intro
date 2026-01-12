<script>
export default {
  name: "ExoneVue",
  data() {
    return {
      products: [
        // --- LE CŒUR DE LA BÊTE ---
        {
          'id': 1,
          'name': 'Intel Core i9-14900KS "Special Edition"',
          'unit_price': 850,
          'quantity': 1,
          'description': 'Le processeur grand public le plus rapide du monde. <b>Chauffe plus que le soleil</b>.'
        },
        // --- LA PUISSANCE GRAPHIQUE (X2 parce que pourquoi pas) ---
        {
          'id': 2,
          'name': 'NVIDIA GeForce RTX 4090 Founders Edition',
          'unit_price': 1950,
          'quantity': 2,
          'description': '<b style="color: green;">DUAL SLI activé.</b> Nécessite sa propre centrale nucléaire pour fonctionner. Adieu le compte en banque.'
        },
        // --- LA FONDATION ---
        {
          'id': 3,
          'name': 'Carte Mère ASUS ROG MAXIMUS Z790 EXTREME GLACIAL',
          'unit_price': 1600,
          'quantity': 1,
          'description': 'Waterblock intégré. Coûte littéralement plus cher que mon premier PC entier.'
        },
        // --- LA MÉMOIRE VIVE ---
        {
          'id': 4,
          'name': 'Kit RAM Corsair Dominator Titanium 192 Go (4x48Go) DDR5',
          'unit_price': 1100,
          'quantity': 1,
          'description': 'Pour pouvoir ouvrir <u>500,000 onglets Chrome</u> sans lagger.'
        },
        // --- LE STOCKAGE INFINI ---
        {
          'id': 5,
          'name': 'SSD NVMe Sabrent Rocket 4 Plus 8TB Gen4',
          'unit_price': 1200,
          'quantity': 2,
          'description': '16 To de stockage ultra-rapide. De quoi installer l\'intégralité de Steam.'
        },
        // --- LE RÉSERVOIR D\'ÉNERGIE ---
        {
          'id': 6,
          'name': 'Alimentation Seasonic PRIME TX-1600 (1600 Watts Titanium)',
          'unit_price': 580,
          'quantity': 1,
          'description': 'Certifiée Titanium. Peut probablement alimenter un petit village en cas de panne.'
        },
        // --- LE BOÎTIER GÉANT ---
        {
          'id': 7,
          'name': 'Boîtier Corsair Obsidian 1000D Super-Tower',
          'unit_price': 650,
          'quantity': 1,
          'description': 'C\'est pas un boîtier, c\'est un <b>studio T1 à Paris</b>. Il faut un permis poids lourd pour le déplacer.'
        },
        // --- LE REFROIDISSEMENT ---
        {
          'id': 8,
          'name': 'Kit Watercooling Custom EKWB Quantum "Ultimate"',
          'unit_price': 2500,
          'quantity': 1,
          'description': 'Tuyaux rigides en verre, raccords en or, double pompe D5. Le PC est plus froid que ton ex.'
        },

        // --- LES TRUCS DÉBILES ET HORS DE PRIX ---
        {
          'id': 9,
          'name': 'Pâte Thermique "Diamant Liquide 24K"',
          'unit_price': 450,
          'quantity': 1,
          'description': 'Composée de vrais diamants broyés et de larmes de licorne. Gain de température : 0.5°C.'
        },
        {
          'id': 10,
          'name': 'Module de stabilisation Quantique RGB',
          'unit_price': 8000,
          'quantity': 1,
          'description': '<b style="color: red; font-size: 1.2em;">EXPÉRIMENTAL.</b> Empêche le PC de créer un trou noir lors des rendus 8K. Ne pas secouer.'
        },
        {
          'id': 11,
          'name': 'Mini-Réacteur à Fusion Froide "Stark Ind."',
          'unit_price': 45000,
          'quantity': 1,
          'description': 'Source d\'énergie illimitée pour le RGB. <u>Attention aux radiations gamma</u>.'
        }
      ]
    }
  },
  methods: {
    round2(number) {
      return Math.round(number * 100) / 100
    },
    getLineTotal(product) {
      const result = product.unit_price * product.quantity
      return this.round2(result)
    }
  },
  computed: {
    totalHT() {
      const ht = this.products.reduce((total, product) => {
        return total + (product.unit_price * product.quantity)
      }, 0)
      return this.round2(ht)
    },
    totalTVA() {
      return this.round2((20 * this.totalHT) / 100)
    },
    totalTTC() {
      return this.round2(this.totalHT + this.totalTVA)
    }
  }
}
</script>

<template>
  <table class="table-auto">
    <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Description</th>
      <th scope="col">Prix unitaire</th>
      <th scope="col">Quantité</th>
      <th scope="col">Prix total</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="product in products" :key="product.id">
      <th scope="row">{{ product.name }}</th>
      <td v-html="product.description"></td>
      <td>{{ round2(product.unit_price) }} €</td>
      <td>{{ product.quantity }}</td>
      <td>{{ getLineTotal(product) }} €</td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
      <th scope="row" colspan="4">Total HT</th>
      <td>{{ totalHT }} €</td>
    </tr>
    <tr>
      <th scope="row" colspan="4">TVA</th>
      <td>{{ totalTVA }} €</td>
    </tr>
    <tr>
      <th scope="row" colspan="4">TVA</th>
      <td>{{ totalTTC }} €</td>
    </tr>
    <tr>
      <td colspan="5">
        <span v-if="totalTTC >= 90000 ">Livraison offerte !</span>
        <span v-else>Plus que {{ round2(90000 - totalTTC)  }}€ pour atteindre les 90000 € et avoir vos frais de livraisons offert !</span>
      </td>
    </tr>
    </tfoot>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  background-color: #1e293b;
  border: 1px solid #334155;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  color: #f1f5f9;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
}

caption {
  caption-side: bottom;
  padding: 12px;
  font-weight: 500;
  color: #94a3b8;
  font-style: italic;
  font-size: 0.8rem;
}

thead {
  background-color: #0f172a;
  border-bottom: 2px solid #334155;
}

th {
  padding: 15px 10px;
  text-align: left;
  font-weight: 600;
  color: #42b983;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1.2px;
}

td {
  border-bottom: 1px solid #334155;
  padding: 12px 10px;
  transition: color 0.2s;
}

td:last-of-type {
  text-align: center;
}

tbody > tr:nth-of-type(even) {
  background-color: rgba(255, 255, 255, 0.02);
}

tbody tr:hover {
  background-color: rgba(66, 185, 131, 0.1);
  cursor: default;
}

tbody tr:hover td {
  color: white;
}

tfoot {
  background-color: #0f172a;
  border-top: 2px solid #334155;
  color: #94a3b8;
}

tfoot th {
  text-align: right;
  color: #94a3b8;
}

tfoot td {
  font-weight: bold;
  color: #42b983;
}
</style>