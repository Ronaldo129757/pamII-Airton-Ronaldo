import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar // Mantenha o StatusBar para controle de estilo da barra do sistema
} from 'react-native';

// --- Componente da Tela de Configurações (SettingsScreen) ---
// Este componente é autônomo e pode ser usado como uma tela em um navegador de abas.
const SettingsScreen = () => {
  return (
    <SafeAreaView style={settingsStyles.fullContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#202020" /> {/* Define o estilo da barra de status */}
      <View style={settingsStyles.container}>
        {/* Cabeçalho do Perfil */}
        <View style={settingsStyles.profileHeader}>
          {/* Usando uma imagem de placeholder, substitua pela sua imagem do logo Titan Hydra */}
          <Image
            source={{ uri: 'https://play-lh.googleusercontent.com/k2BaLq9MgfgJCSGSTi5HY26FcdiCwlkO5F9X6oZgBPrguMvnWjrWgsER_O8tlsLegZ0' }}
            style={settingsStyles.profileLogo}
          />
          <View style={settingsStyles.profileTextContainer}>
            <Text style={settingsStyles.profileName}>T!tan Hydra</Text>
            <Text style={settingsStyles.profileUserType}>Usuário</Text>
          </View>
        </View>

        {/* Seção de Menu Principal */}
        <ScrollView style={settingsStyles.menuItemsContainer}>
          <TouchableOpacity style={[settingsStyles.menuItem, settingsStyles.menuItemActive]}>
            {/* Ícone verde de filme */}
            <View style={settingsStyles.iconFilmeBackground}>
                <Text style={settingsStyles.menuItemIconFilme}>🎬</Text>
            </View>
            <Text style={[settingsStyles.menuItemText, settingsStyles.menuItemTextActive]}>Filmes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={settingsStyles.menuItem}>
            <Text style={settingsStyles.menuItemIcon}>📺</Text>
            <Text style={settingsStyles.menuItemText}>Series</Text>
          </TouchableOpacity>

          <TouchableOpacity style={settingsStyles.menuItem}>
            <Text style={settingsStyles.menuItemIcon}>📖</Text>
            <Text style={settingsStyles.menuItemText}>Novelas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={settingsStyles.menuItem}>
            <Text style={settingsStyles.menuItemIcon}>❤️</Text>
            <Text style={settingsStyles.menuItemText}>Favoritos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={settingsStyles.menuItem}>
            <Text style={settingsStyles.menuItemIcon}>⬇️</Text>
            <Text style={settingsStyles.menuItemText}>Downloads</Text>
          </TouchableOpacity>

          {/* Separador e Título da Seção Apps */}
          <View style={settingsStyles.sectionDivider} />
          <Text style={settingsStyles.sectionTitle}>Apps</Text>

          <TouchableOpacity style={settingsStyles.menuItem}>
            <Text style={settingsStyles.menuItemIcon}>📱</Text> {/* Ícone para Apps */}
            <Text style={settingsStyles.menuItemText}>Hydra Kids</Text>
          </TouchableOpacity>

          {/* Separador e Título da Seção Suporte */}
          <View style={settingsStyles.sectionDivider} />
          <Text style={settingsStyles.sectionTitle}>Soporte</Text>

          <TouchableOpacity style={settingsStyles.menuItem}>
            <Text style={settingsStyles.menuItemIcon}>✈️</Text>
            <Text style={settingsStyles.menuItemText}>Síguenos en Telegram</Text>
          </TouchableOpacity>

          <TouchableOpacity style={settingsStyles.menuItem}>
            <Text style={settingsStyles.menuItemIcon}>🔵</Text> {/* Simula o ícone do Facebook */}
            <Text style={settingsStyles.menuItemText}>Síguenos en Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={settingsStyles.menuItem}>
            <Text style={settingsStyles.menuItemIcon}>🚪</Text>
            <Text style={settingsStyles.menuItemText}>Fechar Sessão</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

// --- Estilos para SettingsScreen ---
const settingsStyles = StyleSheet.create({
  fullContainer: { // Para garantir que a SafeAreaView ocupe toda a tela
    flex: 1,
    backgroundColor: '#202020',
  },
  container: {
    flex: 1,
    backgroundColor: '#202020', // Cor de fundo mais escura para o menu lateral
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#202020', // Mesmo fundo
    borderBottomWidth: 1,
    borderBottomColor: '#303030', // Linha sutil abaixo do cabeçalho
  },
  profileLogo: {
    width: 60,
    height: 60,
    borderRadius: 30, // Arredondado para simular o logo
    marginRight: 15,
    backgroundColor: '#1E88E5', // Cor de fundo do placeholder
  },
  profileTextContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  profileUserType: {
    fontSize: 16,
    color: '#AAAAAA',
  },
  menuItemsContainer: {
    flex: 1,
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 1, // Pequeno espaçamento entre itens
  },
  menuItemActive: {
    backgroundColor: '#388E3C', // Cor verde de destaque para "Películas"
    borderRadius: 8, // Borda arredondada para o item ativo
    marginHorizontal: 10, // Para a borda não encostar nas laterais
  },
  menuItemIcon: {
    fontSize: 24,
    color: '#CCCCCC', // Cor padrão dos ícones
    width: 30, // Largura fixa para alinhar ícones e texto
    textAlign: 'center',
    marginRight: 15,
  },
  iconFilmeBackground: { // Estilo para o ícone de filme verde
    backgroundColor: '#4CAF50', // Verde vibrante
    width: 28, // Ajuste para tamanho do icon
    height: 20, // Ajuste para tamanho do icon
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginRight: 17, // Ajuste de margem para alinhar com outros ícones
    overflow: 'hidden', // Garante que o conteúdo não vaze
  },
  menuItemIconFilme: { // Texto do ícone de filme
    fontSize: 16, // Tamanho menor para caber no background
    color: 'white',
  },
  menuItemText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
  },
  menuItemTextActive: {
    fontWeight: '700', // Texto ativo mais negrito
  },
  sectionDivider: {
    height: 1,
    backgroundColor: '#303030',
    marginVertical: 15,
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#AAAAAA',
    fontWeight: '600',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
});

export default SettingsScreen; // Exporta o componente SettingsScreen
