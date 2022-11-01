import TheMovieDbSource from "../../data/themoviedb-source";

const NowPlaying = {
  async render() {
    return `
            <h2>Now Playing page</h2>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default NowPlaying;
