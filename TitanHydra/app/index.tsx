import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions // Para obter a largura da tela e calcular tamanhos responsivos
} from 'react-native';

// Obtém a largura da tela para cálculos responsivos
const { width } = Dimensions.get('window');
// Definindo uma largura base para o pôster, considerando 4 colunas e espaçamento
const numColumns = 4;
const screenPadding = 20; // 10 em cada lado (paddingHorizontal do movieGridContainer)
const itemSpacing = 10; // Espaçamento entre os itens
const posterWidth = (width - screenPadding - (numColumns - 1) * itemSpacing) / numColumns;


const MovieScreen = () => {
  // Dados de exemplo para os filmes. Em uma aplicação real, estes dados viriam de uma API.
  // As URLs das imagens foram substituídas por placeholders para garantir a compilação no ambiente.
  const movies = [
    { id: '1', title: 'Chefes de Estado', image: 'https://br.web.img3.acsta.net/img/0f/12/0f125b89a016dc07513b81f65ac3065e.jpg' },
    { id: '2', title: 'Superman', image: 'https://br.web.img3.acsta.net/img/86/64/8664d1b110b95eb32313683f1a655f5f.jpg' },
    { id: '3', title: 'Vingadores: Ultimato', image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg' },
    { id: '4', title: 'Velozes e Furiosos 10', image: 'https://m.media-amazon.com/images/S/pv-target-images/848a155842f8331062bd190b1584e3b152af0271468312ce6b0def838721592b.jpg' },
    { id: '5', title: 'Esquadrão Suicida', image: 'https://br.web.img2.acsta.net/c_310_420/pictures/21/06/22/22/19/1495362.jpg' },
    { id: '6', title: 'Gladiador 2', image: 'https://images.justwatch.com/poster/322099104/s718/gladiator-2.jpg' },
    { id: '7', title: 'Bad Boys: Hasta la Muerte', image: 'https://m.media-amazon.com/images/M/MV5BZWNjZWUwNDgtYTM4ZC00Zjk0LTg3ZWItNGEyZmVkZTIxZDk0XkEyXkFqcGc@._V1_.jpg' },
    { id: '8', title: 'John Wick: Baba Yaga', image: 'https://www.ucicinemas.com.br/Content/Upload/Filmes/Posters/9937/filme_9937.jpg' },
    { id: '9', title: 'Liga da Justiça', image: 'https://play-lh.googleusercontent.com/e9cKG_aLFwCNBKZQqFF9kvqf5OG3vhkeSFdVU4zItFdqUIsirjreZdFG37Jljl1Agqhj=w240-h480-rw' },
    { id: '10', title: 'Adão Negro', image: 'https://cinema10.com.br/upload/featuredImage.php?url=https%3A%2F%2Fcinema10.com.br%2Fupload%2Ffilmes%2Ffilmes_12272_13737-medio.jpg' },
    { id: '11', title: 'Batman', image: 'https://br.web.img3.acsta.net/pictures/22/03/02/19/26/3666027.jpg' },
    { id: '12', title: 'Mulher-Maravilha', image: 'https://images.justwatch.com/poster/9338913/s718/mulher-maravilha-2017.jpg' },
    { id: '13', title: 'Homem de Ferro 3', image: 'https://upload.wikimedia.org/wikipedia/pt/1/19/Iron_Man_3_poster.jpg' },
    { id: '14', title: 'Capitão America: O soldado invernal', image: 'https://upload.wikimedia.org/wikipedia/pt/e/e8/Captain_America_The_Winter_Soldier.jpg' },
    { id: '15', title: 'Rango', image: 'https://m.media-amazon.com/images/M/MV5BMTc4NjEyODE1OV5BMl5BanBnXkFtZTcwMjYzNTkxNA@@._V1_.jpg' },
    { id: '16', title: 'Wall-e', image: 'https://play-lh.googleusercontent.com/s90tRLDG8npS1xHbN3Hu7c7yBdLyv05CuLOwIjAR1Lsk8fj-jCiPiMkdbHamxLPQDTBQ' },
    { id: '17', title: 'Jurassic World', image: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Jurassic_World_Rebirth_poster.jpg' },
    { id: '18', title: '9-A Salvação', image: 'https://m.media-amazon.com/images/S/pv-target-images/8891f293384aa684661951363c1f2db17c9f84048fb1606f8d5063af9df16a09.jpg' },
    { id: '19', title: 'Karate Kid', image: 'https://m.media-amazon.com/images/S/pv-target-images/2600a1b1a374a2a0026bd9ad99ce6cc6070fdd4e78c7cd4614d30633d7e3fb39.jpg' },
    { id: '20', title: 'Ratatouille', image: 'https://www.papodecinema.com.br/wp-content/uploads/2012/08/20181221-medium-ratatouille-poster-size-12-inch-x-18-inch-pack-of-1-original-imafy8d2aqshpguj.webp' },
  ];

  // Função para agrupar os filmes em linhas de 4 para o grid
  const rows = [];
  for (let i = 0; i < movies.length; i += numColumns) {
    rows.push(movies.slice(i, i + numColumns));
  }

  return (
    // Container principal que ocupa toda a tela
    <View style={styles.container}>
      {/* Configura a barra de status (hora, bateria, etc.) para texto claro */}
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* Cabeçalho da aplicação */}
      <View style={styles.header}>
        {/* Ícone de menu */}
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.headerIcon}>☰</Text>
        </TouchableOpacity>
        {/* Título da tela */}
        <Text style={styles.headerTitle}>Filmes</Text>
        {/* Ícone de pesquisa */}
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.headerIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Abas de categorias - ScrollView horizontal para permitir rolagem das categorias */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryContainer}
      >
        <TouchableOpacity>
          <Text style={[styles.categoryText, styles.activeCategory]}>AÇÃO</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>INFANTIL</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>ANIME</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>TERROR</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>COMEDIA</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>DRAMA</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>ROMANCE</Text>
        </TouchableOpacity>
        {/* Adicione mais categorias aqui conforme necessário */}
      </ScrollView>

      {/* Grid de Filmes - ScrollView vertical para permitir rolagem dos pôsteres */}
      <ScrollView contentContainerStyle={styles.movieGridContainer}>
        {rows.map((row, rowIndex) => (
          // Cada View representa uma linha do grid de filmes
          <View key={rowIndex} style={styles.movieRow}>
            {row.map(movie => (
              // Cada TouchableOpacity representa um pôster de filme clicável
              <TouchableOpacity key={movie.id} style={styles.moviePosterContainer}>
                {/* Imagem do pôster do filme */}
                {/* source={{ uri: movie.image }} é usado para carregar imagens de URLs */}
                <Image source={{ uri: movie.image }} style={styles.moviePoster} />
              </TouchableOpacity>
            ))}
            {/* Adiciona "espaços vazios" para manter o alinhamento do grid
                se a última linha não tiver 4 filmes */}
            {row.length < numColumns && Array(numColumns - row.length).fill(null).map((_, index) => (
              <View key={`placeholder-${rowIndex}-${index}`} style={styles.moviePosterContainer} />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

// Objeto de estilos usando StyleSheet.create para otimização
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível na tela
    backgroundColor: '#000', // Fundo preto
    // Adiciona padding superior para não sobrepor a barra de status (iOS)
    // No Android, `StatusBar.currentHeight` ajusta automaticamente.
    paddingTop: StatusBar.currentHeight || 40,
  },
  header: {
    flexDirection: 'row', // Itens na linha (horizontalmente)
    justifyContent: 'space-between', // Espaço igual entre os itens
    alignItems: 'left', // Alinha itens verticalmente ao centro
    paddingHorizontal: 15, // Padding nas laterais
    paddingBottom: 15, // Padding na parte inferior
  },
  iconButton: {
    padding: 5, // Aumenta a área clicável dos ícones
  },
  headerIcon: {
    color: '#fff', // Cor branca para os ícones
    fontSize: 24, // Tamanho da fonte dos ícones
  },
  headerTitle: {
    color: '#fff', // Cor branca para o título
    fontSize: 20, // Tamanho da fonte do título
    fontWeight: 'bold', // Negrito para o título
  
  },
  categoryContainer: {
    flexDirection: 'row', // Itens na linha (horizontalmente)
    justifyContent: 'flex-start', // Alinha itens ao início
    paddingVertical: 10, // Padding vertical
    paddingHorizontal: 15, // Padding horizontal
    borderBottomWidth: 1, // Linha divisória inferior
    borderBottomColor: '#333', // Cor da linha divisória
  },
  categoryText: {
    color: '#888', // Cor padrão para categorias inativas
    fontSize: 16, // Tamanho da fonte
    marginRight: 20, // Espaçamento entre as categorias
    paddingBottom: 5, // Padding para a linha ativa não encostar no texto
  } as TextStyle,
  activeCategory: {
    color: '#fff', // Cor branca para a categoria ativa
    fontWeight: 'bold', // Negrito
    borderBottomWidth: 2, // Linha inferior para a categoria ativa
    borderBottomColor: 'red', // Cor vermelha para a linha ativa
  },
  movieGridContainer: {
    paddingHorizontal: 15, // Espaçamento horizontal para o grid
    paddingTop: 15, // Espaçamento superior
  },
  movieRow: {
    flexDirection: 'row', // Itens na linha (horizontalmente)
    justifyContent: 'space-between', // Espaço igual entre os pôsteres
    marginBottom: 10, // Espaçamento entre as linhas de pôsteres
  },
  moviePosterContainer: {
    width: posterWidth, // Largura calculada dinamicamente
    aspectRatio: 2 / 3, // Proporção de aspecto para pôsteres de filme (2 largura / 3 altura)
    borderRadius: 1.5, // Cantos arredondados
    overflow: 'hidden', // Garante que a imagem respeite os cantos arredondados
    position: 'relative', // Necessário para posicionar o título sobreposto
    backgroundColor: '#1a1a1a', // Cor de fundo para espaços vazios ou enquanto a imagem carrega
    marginHorizontal: itemSpacing / 2, // Adiciona margem horizontal para espaçamento entre itens
  },
  moviePoster: {
    width: '100%', // Ocupa 100% da largura do contêiner
    height: '100%', // Ocupa 100% da altura do contêiner
    resizeMode: 'cover', // Redimensiona a imagem para cobrir o contêiner, cortando se necessário
  },
  movieTitleOverlay: {
    position: 'absolute', // Posicionamento absoluto sobre a imagem
    bottom: 0, // Ancorado na parte inferior
    left: 0, // Ancorado na esquerda
    right: 0, // Ancorado na direita
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fundo preto semi-transparente para o texto
    color: '#fff', // Cor do texto branca
    fontSize: 9, // Tamanho da fonte do título
    paddingVertical: 5, // Padding vertical
    paddingHorizontal: 5, // Padding horizontal
    textAlign: 'center', // Alinha o texto ao centro
  },
});

export default MovieScreen;
