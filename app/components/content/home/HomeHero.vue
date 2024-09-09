<template>
  <ULandingHero>
    <template #headline>
      <NuxtLink>
        <UBadge
          size="lg"
          variant="outline"
          class="rounded-full py-1 px-3 badge"
        >
          <slot name="headline" />
        </UBadge>
      </NuxtLink>
    </template>

    <template #title>
      <div>
        <ContentSlot name="title" />
      </div>
    </template>

    <template #description>
      <ContentSlot
        name="description"
        unwrap="p"
      />
    </template>

    <template #links>
      <slot name="links" />
    </template>
  </ULandingHero>
</template>
