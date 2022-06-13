package com.diary.back.model;


import lombok.*;

import javax.persistence.*;

@Builder
@RequiredArgsConstructor
@AllArgsConstructor
@Setter @Getter
@Entity
@ToString
public class PostEmotion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long post_emotion_id;
    @ManyToOne
    @JoinColumn(name="post_id")
    private Long post_id;
    private String emotion_word;
    @ManyToOne
    @JoinColumn(name="emotion_word_id")
    private Long emotion_word_id;
    @ManyToOne
    @JoinColumn(name="emotion_cat_id")
    private Long emotion_cat_id;
}
