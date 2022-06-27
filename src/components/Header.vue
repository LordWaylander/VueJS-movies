<template lang="">
    <div className='header'>
      <nav>
        <ul>
          <RouterLink to="/" active-class="nav-active">
            <li>Acceuil</li>
          </RouterLink>
          <RouterLink to="/userlist" active-class="nav-active">
            <li>Coups de coeur</li>
          </RouterLink>

        </ul>
      </nav>
      <h1>VueJS Movies</h1>
    </div>
</template>