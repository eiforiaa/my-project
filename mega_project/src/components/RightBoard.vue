<template>
  <div class="right-board">
    <div v-if="!isHotelEmpty">
      <div>Id: {{ hotel.id }}</div>
      <div>Название: {{ hotel.fullName }}</div>
      <div>Административный округ: {{ hotel.admArea }}</div>
      <div>Район: {{ hotel.district }}</div>
      <div>Адрес: {{ hotel.address }}</div>
      <div>Полностью адаптированный объект: {{ yesNo(hotel.fullAdapted) }}</div>
      <div>
        Объект адаптирован для лиц с нарушением опорно-двигательного аппарата:
        {{ yesNo(hotel.musculoskeletalSystemViolationAdapted) }}
      </div>
      <div>
        Объект адаптирован для лиц с нарушением зрения:
        {{ yesNo(hotel.visualImpairmentAdapted) }}
      </div>
      <div>
        Объект адаптирован для лиц с нарушением слуха:
        {{ yesNo(hotel.hearingImpairmentAdapted) }}
      </div>
      <div>
        Объект адаптирован для лиц, передвигающихся на инвалидной коляске:
        {{ yesNo(hotel.wheelchairUsersAdapted) }}
      </div>
      <div>
        Наличие специально адаптированных туалетных кабинок:
        {{ yesNo(hotel.specialToilets) }}
      </div>
      <div>
        Наличие специально адаптированных номеров для ночлега:
        {{ yesNo(hotel.specialBedrooms) }}
      </div>
      <div>
        Наличие парковочных мест для инвалидов: {{ yesNo(hotel.parking) }}
      </div>
    </div>
    <div v-else class="right-board__no-selected">
      Выберите отель
    </div>
  </div>
</template>

<script>
export default {
  name: "RightBoard",
  props: {
    hotel: {
      type: Object,
      required: true
    }
  },
  computed: {
    isHotelEmpty() {
      return Object.keys(this.hotel).length === 0;
    }
  },
  methods: {
    yesNo(value) {
      if (value) {
        return "+";
      } else {
        return "-";
      }
    }
  }
};
</script>

<style scoped>
.right-board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--dark_100);
}

.right-board .right-board__no-selected {
  font-size: 26px;
  text-align: center;
}
</style>
