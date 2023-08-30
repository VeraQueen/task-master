export class HoverEffectsService {
  onHoverStar(event: Event) {
    (event.target as Element).classList.toggle('bi-star-fill');
    (event.target as Element).classList.toggle('bi-star');
  }

  onHoverDone(event: Event) {
    (event.target as Element)
      .closest('.list-group-item')
      .classList.toggle('mark-done-background');
    (event.target as Element).classList.toggle('bi-check');
    (event.target as Element).classList.toggle('bi-check-all');
  }

  onHoverDelete(event: Event) {
    (event.target as Element).classList.toggle('bi-x-circle-fill');
    (event.target as Element).classList.toggle('bi-x-circle');
  }
}
