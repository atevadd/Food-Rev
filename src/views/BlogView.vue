<template>
  <div class="blogpage">
    <header class="blogpage__header">
      <div class="blogpage__header-image">
        <img
          src="https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Admin profile picture" />

        <div class="blogpage__header-details">
          <h3 class="admin-name">Admin</h3>
          <p class="upload-date">Aug 15, 2021</p>
        </div>
      </div>

      <div class="blogpage__header-social">
        <span class="social facebook"
          ><a href="#"><i class="uil uil-facebook-f"></i></a
        ></span>
        <span class="social facebook"
          ><a href="#"><i class="uil uil-twitter"></i></a
        ></span>
        <span class="social facebook"
          ><a href="#"><i class="uil uil-share-alt"></i></a
        ></span>
        <span class="social twitter"><i class="uil uil-bookmark"></i></span>
      </div>
    </header>

    <!-- The main content of the page -->
    <section class="blogpage__content">
      <h1 class="blogpage__content-title">A Day in lagoon resturant</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quidem
        soluta architecto blanditiis ipsum id numquam nemo cupiditate saepe
        dignissimos error aperiam repellendus, aut quibusdam neque, excepturi ad
        velit dolor tempore assumenda earum eveniet consequatur illum! Rerum
        vitae officiis voluptates quos dolore quibusdam suscipit, aperiam sequi
        quo numquam unde iusto temporibus soluta nostrum veniam repellat, nisi,
        ullam similique autem veritatis facere voluptas! Non, eligendi nisi,
        porro deleniti sunt corporis laboriosam molestiae cumque, ipsam minima
        molestias eius! Voluptate distinctio exercitationem tempora iure maxime
        voluptatum amet neque nulla, rem earum rerum optio soluta ut itaque
        quisquam nisi pariatur aliquid sint perferendis sunt ipsam est! Eius non
        similique aspernatur tempora voluptate officiis molestiae architecto
        nulla? Corrupti eos inventore sint. Dolore officiis natus fuga molestias
        libero impedit sint optio suscipit vero omnis id laborum quas porro rem
        veritatis, distinctio neque numquam voluptates rerum eius sunt aperiam
        magnam exercitationem. Est possimus qui, eligendi autem repudiandae
        quaerat. Ullam dolorum temporibus nemo laboriosam autem excepturi
        aliquid, reprehenderit voluptas. Deserunt optio ducimus aut obcaecati
        nemo cum consectetur alias rem magnam quos tempore necessitatibus cumque
        neque, officiis tenetur aliquid facere, ipsam doloribus nisi aperiam
        repellat. Sed eaque dolor id nobis corporis. Repellendus sapiente labore
        molestiae, excepturi saepe sed modi corporis voluptatibus voluptatem
        placeat quas quis dolor incidunt eum itaque aliquid veniam expedita
        voluptatum deleniti vero ratione accusamus ab optio. Iure quos commodi
        error libero ratione eius quidem illo autem quas molestiae facere ex,
        qui sit dolore consequuntur doloribus dicta quasi sunt minus nemo fugit,
        aperiam officia. Pariatur beatae, earum magni inventore ad rem similique
        atque esse? Facere tempore repudiandae reprehenderit eum culpa quis
        molestias officiis corporis fugit dolorem beatae, nulla assumenda
        veritatis id architecto! Nesciunt excepturi, dolore aliquam libero
        assumenda sapiente voluptatum sed quod neque doloribus ab impedit
        tenetur at quia incidunt esse nemo, id rerum. Quisquam dolore deserunt
        adipisci sed, ad saepe ipsam soluta ipsum sit corporis tenetur, unde
        ducimus, nesciunt officia minus amet animi culpa perspiciatis atque. Ab
        voluptate commodi assumenda. Voluptate laudantium velit harum rem
        impedit itaque ullam, ipsam aliquid debitis aperiam numquam quisquam
        sint nesciunt ut eos natus maiores dolore tenetur. Ducimus delectus id
        hic minima facere tenetur magni quae beatae commodi voluptate cumque
        reiciendis, odio dolorem quo officiis possimus dolor omnis a ex corrupti
        totam temporibus sapiente molestias quia! Quidem, repellat iure. Atque
        omnis et libero, quaerat recusandae porro consequatur corrupti neque vel
        necessitatibus minus sint alias aliquam nulla sit voluptatem voluptas
        ducimus veniam, tempore officia fuga vitae voluptatum fugit provident.
      </p>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.blogpage {
  position: relative;
  width: 90%;
  margin: 40px auto;

  .blogpage__header {
    position: relative;

    display: flex;
    // border: 1px solid red;

    @include desktop {
      width: 60%;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;
    }
    @include mobile {
      width: 100%;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;
    }

    &-image {
      display: flex;
      align-items: center;

      img {
        display: inline-block;
        border-radius: 50%;

        @include desktop {
          width: 60px;
          height: 60px;
          margin-right: 20px;
        }
        @include tablet {
          width: 60px;
          height: 60px;
          margin-right: 20px;
        }
        @include mobile {
          width: 50px;
          height: 50px;
          margin-right: 20px;
        }
      }

      .admin-name {
        color: var(--color-text-heading);
        font-weight: 500;
        font-size: 1.05rem;
        margin-bottom: 3px;
      }
      .upload-date {
        color: var(--color-text-subtitle);
        font-weight: 400;
        font-size: 0.85rem;
      }
    }

    &-social {
      position: relative;

      span {
        margin-left: 20px;

        i {
          font-size: 1.2rem;
          color: var(--color-text-subtitle);

          @include mobile {
            font-size: 0.98rem;
          }
        }
      }
    }
  }

  .blogpage__content {
    width: 60%;

    @include mobile {
      width: 100%;
    }
    &-title {
      font-size: 2rem;
      color: var(--color-text-heading);
      margin-bottom: 30px;
      font-weight: 700;

      @include mobile {
        font-size: 1.8rem;
      }
    }
    p {
      color: var(--color-text-subtitle);
      line-height: 1.8;
    }
  }
}
</style>
